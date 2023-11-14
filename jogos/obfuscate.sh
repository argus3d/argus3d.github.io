# Example: obfuscate_recursive.sh
#!/bin/bash

# Find all JavaScript files and obfuscate them
find . -type f -name "*.js" -exec bash -c '
  for file do
    javascript-obfuscator "$file" --output "$file"
  done
' _ {} +