import json

with open('location_data.json', 'r') as json_file:
	sample_load_file = json.load(json_file) # load the json file as a dictionary
	print(sample_load_file)


rating_list = []
for i in range(len(sample_load_file['results'])):
	rating_list.append(sample_load_file['results'][i]['rating'])
		
# Extract 'location' field
# location = sample_load_file['results'][0]['geometry']['location']

# Print extracted location
print(rating_list)

# Define the filename for the new JSON file
new_file_name = "ratings.json"

# Write the list to the new JSON file
with open(new_file_name, 'w') as json_file:
    json.dump(rating_list, json_file, indent=4)

