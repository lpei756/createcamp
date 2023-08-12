import json

with open('location_data.json', 'r') as json_file:
	sample_load_file = json.load(json_file) # load the json file as a dictionary
	print(sample_load_file)


new_list = []
for i in range(len(sample_load_file['results'])):
	new_list.append(sample_load_file['results'][i]['geometry']['location'])
		
# Extract 'location' field
# location = sample_load_file['results'][0]['geometry']['location']

# Print extracted location
print(new_list)
print(len(new_list))

json.dump(new_list, 'new_loc_data')
