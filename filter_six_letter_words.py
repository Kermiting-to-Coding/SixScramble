import os

# Define the input and output file paths using raw strings
input_file_path = r'C:\Users\james\OneDrive\Documents\GitHub\SixScramble\node_modules\word-list\words.txt'  # Replace with the path to your input file
output_file_path = r'C:\Users\james\OneDrive\Documents\GitHub\SixScramble\node_modules\word-list\six_letter_words.txt'  # Path to save the filtered six-letter words

def filter_six_letter_words(input_file, output_file):
    if not os.path.exists(input_file):
        print(f"Input file {input_file} does not exist.")
        return
    
    try:
        with open(input_file, 'r') as infile, open(output_file, 'w') as outfile:
            for line in infile:
                word = line.strip()  # Remove leading/trailing whitespace
                if len(word) == 6:
                    outfile.write(word + '\n')
        print(f"Filtering complete. Six-letter words saved to {output_file}")
    except Exception as e:
        print(f"An error occurred: {e}")

# Run the filter function
filter_six_letter_words(input_file_path, output_file_path)
