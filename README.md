# Typescript project boilerplate

## Bash function

```bash
# creates a new typescript project starter in the specified directory
newts() {
    if [ -z "$1" ]; then
        echo "Destination folder param missing. (newts folderName)"
    else
        git clone https://github.com/uollazzi/typescript-starter.git $1
        cd $1
        code .
    fi
}
```
