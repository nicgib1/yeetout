from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.core.validators import validate_email
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
import datetime
from .models import Activity, Profile


class Hello(APIView):
    def get(self, request):
        return Response('Hello')


class Register(APIView):
    def post(self, request):
        required_params = ['password', 'email', 'firstName', 'lastName', 'dob']
        try:
            data = request.data
            if all(key in data for key in required_params):
                try:
                    password = self.validate_required_input(
                        required_params[0], data[required_params[0]])
                    email = self.validate_required_input(
                        required_params[1], data[required_params[1]])
                    firstName = self.validate_required_input(
                        required_params[2], data[required_params[2]])
                    lastName = self.validate_required_input(
                        required_params[3], data[required_params[3]])
                    dob = self.validate_required_input(
                        required_params[4], data[required_params[4]])

                except ValidationError as er:
                    return Response({'error': str(er.messages[0])}, status=status.HTTP_400_BAD_REQUEST)

                new_user = User()
                new_user.password = make_password(password)
                new_user.email = email
                new_user.username = email
                new_user.first_name = firstName
                new_user.last_name = lastName

                new_user.save()

                new_profile = Profile()
                new_profile.user = new_user
                new_profile.dob = dob

                try:
                    new_profile.bio = data['bio'] if data['bio'] is not None else ''
                except KeyError:
                    print('Error while parsing bio')

                new_profile.save()

                return Response({'Status': 'Success'}, status=status.HTTP_201_CREATED)

            else:
                return Response({'error': 'Required param(s) missing, please include and retry'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as exp:
            print('Unexpected exception occured: ' + str(exp))
            return Response({"error": "Unexpected error occurred, please report this to Admin"},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @staticmethod
    def validate_required_input(param, value):
        """
        Function to validate the required input of post method
        :param param: It can take one of the values from required param of post method
        :param value: Value of the passed param
        :return: value if value passes the validation criteria for the given param
        :raises: ValidationError: if value doesn't pass the validation criteria for the given param
        """

        if param == 'password':
            if value is not None and type(value) == str and len(value) >= 8:
                return value
            else:
                raise ValidationError(
                    'Invalid Password, password should be at least 8 characters long')

        elif param == 'email':
            if value is not None and type(value) == str and len(value) > 0:
                try:
                    validate_email(value)
                except ValidationError:
                    raise ValidationError('Invalid Email')
                else:
                    if User.objects.filter(email=value).exists():
                        raise ValidationError(
                            'E-mail already in use, please try logging in instead')
                    return value
            else:
                raise ValidationError('Invalid Email')

        elif param == 'firstName':
            if value is not None and type(value) == str and len(value) > 0:
                return value
            else:
                raise ValidationError('Invalid firstName')

        elif param == 'lastName':
            if value is not None and type(value) == str and len(value) > 0:
                return value
            else:
                raise ValidationError('Invalid lastName')

        elif param == 'dob':
            if value is not None and type(value) == str:
                return value
            else:
                raise ValidationError('Invalid DoB')

        else:
            raise ValidationError('Invalid Input Param Passed')


class ValidateToken(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({'valid': True})


class Activities(APIView):
    def get(self, request):
        activities = Activity.objects.all()
        activity_list = []

        for activity in activities:
            item = {
                'id': activity.id,
                'name': activity.name,
                'owner_id': activity.owner.id,
                'description': activity.description,
                # 'image': activity.image,
                'location': activity.location,
                'date': activity.date,
                'time': activity.time,
                'min_age': activity.min_age,
                'max_age': activity.max_age,
                'cost': activity.cost,
                'attendies': activity.attendies
            }

            activity_list.append(item)

        content = {
            'activities': activity_list
        }

        print(content)

        return Response(content)


class CreateActivity(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        data = request.data

        activity = Activity()
        activity.owner = request.user

        if 'name' in data:
            activity.name = data['name']
        else:
            activity.name = 'New Activity'

        if 'description' in data:
            activity.description = data['description']
        else:
            activity.description = ''

        if 'location' in data:
            activity.location = data['location']
        else:
            activity.location = ''

        if 'date' in data:
            activity.date = data['date']
        else:
            activity.date = '2019-11-16'

        if 'time' in data:
            activity.time = data['time']
        else:
            activity.time = '00:00:00'

        if 'min_age' in data:
            activity.min_age = data['min_age']
        else:
            activity.min_age = 0

        if 'max_age' in data:
            activity.max_age = data['max_age']
        else:
            activity.max_age = 100

        if 'cost' in data:
            activity.cost = data['cost']
        else:
            activity.cost = 0

        if 'attendies' in data:
            activity.attendies = data['attendies']
        else:
            activity.attendies = 10

        activity.save()

        return Response({'Success': 'Success'})


class JoinActivity(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        data = request.data
        if 'activity_id' not in data:
            return Response({'Error': 'Forgot activity_id'}, status=status.HTTP_400_BAD_REQUEST)

        Activity.objects.get(id=data['activity_id']).joined.add(request.user)

        return Response({'Success': 'Success'})
