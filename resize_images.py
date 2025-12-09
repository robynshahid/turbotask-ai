from PIL import Image
import os

def resize_image(input_path, output_path, width):
    try:
        with Image.open(input_path) as img:
            # Calculate height to maintain aspect ratio
            w_percent = (width / float(img.size[0]))
            h_size = int((float(img.size[1]) * float(w_percent)))
            
            # Resize image
            img = img.resize((width, h_size), Image.Resampling.LANCZOS)
            
            # Save resized image
            img.save(output_path, quality=85, optimize=True)
            print(f"Resized {input_path} to {width}px width at {output_path}")
    except Exception as e:
        print(f"Error resizing {input_path}: {e}")

# Define images to resize
images = [
    "hero-banner-new.jpg",
    "feature-toolkits-new.jpg",
    "feature-bundles-new.jpg"
]

base_path = "/home/ubuntu/turbotask-ai/client/public/images/"

for image_name in images:
    input_path = os.path.join(base_path, image_name)
    
    # Create mobile version (640px width)
    name, ext = os.path.splitext(image_name)
    mobile_output_path = os.path.join(base_path, f"{name}-mobile{ext}")
    resize_image(input_path, mobile_output_path, 640)
