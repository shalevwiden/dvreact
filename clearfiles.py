import os
import sys

def delete_by_extension(root_folder: str, extension: str):
    # Normalize the extension so user can enter ".css" or "css"
    if not extension.startswith("."):
        extension = "." + extension

    deleted_files = []

    for folder, _, files in os.walk(root_folder):
        for file in files:
            if file.endswith(extension):
                full_path = os.path.join(folder, file)
                try:
                    os.remove(full_path)
                    deleted_files.append(full_path)
                except Exception as e:
                    print(f"ERROR deleting {full_path}: {e}")

    if deleted_files:
        print("\nDeleted files:")
        for f in deleted_files:
            print(" -", f)
    else:
        print(f"No files with extension '{extension}' found.")

if __name__=="__main__":
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    srcpath=os.path.join(BASE_DIR,'src')
    print(BASE_DIR)
    delete_by_extension(srcpath,".css")
    delete_by_extension(srcpath,".map")