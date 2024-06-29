import os

# Define the input and output file paths
input_file_path = r'C:\Users\james\OneDrive\Documents\GitHub\SixScramble\node_modules\word-list\words.txt'  # Replace with the path to your input file
output_file_path = r'C:\Users\james\OneDrive\Documents\GitHub\SixScramble\node_modules\wordlist.js'  # Path to save the JavaScript array

def convert_to_js_array(input_file, output_file):
    if not os.path.exists(input_file):
        print(f"Input file {input_file} does not exist.")
        return
    
    try:
        with open(input_file, 'r') as infile, open(output_file, 'w') as outfile:
            words = [line.strip() for line in infile if len(line.strip()) == 6]
            js_array_content = f"const wordList = {words};"
            outfile.write(js_array_content)
        print(f"JavaScript array saved to {output_file}")
    except Exception as e:
        print(f"An error occurred: {e}")

# Run the conversion function
convert_to_js_array(input_file_path, output_file_path)
