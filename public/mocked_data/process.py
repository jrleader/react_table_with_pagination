import csv

def removeTrailingComma(path):
    updatedRows = []
    with open(path, newline='') as gymMemberCsv:
        gymMemberReader = csv.reader(gymMemberCsv, delimiter=',', quotechar=None)
        # Read the csv by rows
        for row in gymMemberReader:
            print(row)
            start = 0
            end = len(row) - 1
            # Remove the last empty element from the row
            row = row[start:end]
            updatedRows.append(row)
    newPath = path[0:path.rindex('/') + 1] + "gym_members_new.csv"
    with open(newPath, 'w', newline='') as newGymMemberCsv:
        gymMemberWriter = csv.writer(newGymMemberCsv, delimiter=',')
        for row in updatedRows:
            gymMemberWriter.writerow(row)
    with open(newPath, newline='') as newGymMemberCsv:
        gymMemberReader = csv.reader(newGymMemberCsv, delimiter=',')
        for row in gymMemberReader:
            print(row)


    # Write the trimmed data to the new csv
    # newPath = path
    # csv.writer(newPath, ..., ...)


if __name__ == "__main__":
    csvPath = "/Users/Xiaoming/Public/WebDev/react/react_table_demo_app/table_with_pagination/public/mocked_data/gym_members.csv"
    removeTrailingComma(csvPath)
    