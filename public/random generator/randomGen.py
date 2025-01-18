import random
import string
import json

# Function to generate random string with specific length
def generate_random_string(length):
    return ''.join(random.choices(string.ascii_letters, k=length))

# Function to generate random PESEL
def generate_random_pesel():
    pesel = ''.join(random.choices(string.digits, k=11))
    return pesel

# Function to generate random address
def generate_random_address():
    street_names = ["Wąska", "Kwiatowa", "Długa", "Zielona", "Jasna", "Słoneczna", "Lipowa", "Świętego Jana", "Leśna", "Krakowska"]
    cities = ["Machnów Nowy", "Warszawa", "Kraków", "Wrocław", "Gdańsk", "Łódź", "Poznań", "Lublin", "Katowice", "Bydgoszcz"]
    zip_codes = ["22-680", "01-100", "30-200", "60-500", "70-400", "50-300", "20-100", "31-400", "80-600", "90-700"]
    
    street = random.choice(street_names)
    number = f"{random.randint(1, 100)}/{random.randint(1, 20)}"
    city = random.choice(cities)
    zip_code = random.choice(zip_codes)
    
    return f"{street} {number} {city} {zip_code}"

# Function to generate random data entry
def generate_random_data():
    index = random.randint(1, 99999)  # Random index number between 1 and 99999
    imie = generate_random_string(random.randint(4, 12))  # Name with 4-12 characters
    nazwisko = generate_random_string(random.randint(7, 20))  # Surname with 7-20 characters
    adres = generate_random_address()  # Random address
    pesel = generate_random_pesel()  # Random PESEL
    plec = random.choice(["M", "F"])  # Gender, either M or F
    
    return {
        "Index": index,
        "Imie": imie,
        "Nazwisko": nazwisko,
        "Adres": adres,
        "Pesel": pesel,
        "Płeć": plec
    }

# Generating x random records
x = 1000
data = [generate_random_data() for _ in range(x)]

# Saving the data to a JSON file
with open('data.json', 'w', encoding='utf-8') as json_file:
    json.dump(data, json_file, ensure_ascii=False, indent=4)