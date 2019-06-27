import gspread
from oauth2client.service_account import ServiceAccountCredentials


# use creds to create a client to interact with the Google Drive API
# scope = ['https://spreadsheets.google.com/feeds']
scope = ['https://spreadsheets.google.com/feeds',
         'https://www.googleapis.com/auth/drive']
creds = ServiceAccountCredentials.from_json_keyfile_name('/home/himanshuvats/Downloads/client_secret.json', scope)
client = gspread.authorize(creds)

# Find a workbook by name and open the first sheet
# Make sure you use the right name here.
# sheet = client.open("Source Names for Bain-OYO").sheet1
sheet = client.open("Bain City vs Number of Properties | Internal").get_worksheet(5)

# Extract and print all of the values
# list_of_hashes = sheet.get_all_values()
cell = sheet.find('vienna')
print(cell.value, cell.row, cell.col)
sheet.update_cell(cell.row, 19, 'Test')
# print(list_of_hashes)