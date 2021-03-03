# function that takes the number of times a person washes their hands per day N

# and the number of months they follow this routine nM and
import datetime

# Convert seconds into hours, minutes and seconds


def convert(nMperDay):
    return str(datetime.timedelta(seconds=nMperDay))


handswashed = int(
    input('How many times do you wash your hands per day?: '))
DurInMonths = int(
    input('How many months do you want to calculate time spent for? '))


def wash_hands(handswashed, DurInMonths):

    timeperday = handswashed * 21  # 21 seconds spent washing hands
    monthToDays = DurInMonths * 30  # 30 days in month

    result = monthToDays * timeperday
    # calculates the duration in hours, minutes and seconds that person spends washing hands
    resultinhours = convert(result)

    print("that is how time you spent washing your hands: " +
          resultinhours + " hours during " + str(DurInMonths) + " months.")

    return


wash_hands(handswashed, DurInMonths)
