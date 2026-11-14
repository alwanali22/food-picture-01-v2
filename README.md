# Nasi Tumpeng — Food Picture Entry

A festive Indonesian nasi tumpeng: a tall cone of golden turmeric
rice on a banana leaf, surrounded by seven side dishes — fried
chicken, a glossy-yolked egg, red sambal, green vegetables,
shredded omelette, tempeh cubes and cucumber slices — set against
a bright warm-cream background.

The picture was rendered with PIL at 1024×1024 and stored as
entry.png. The entry program (main.ts) copies entry.png into the
output directory for grading.

## How it runs

main.ts copies the pre-rendered entry.png into the output directory
(MAKEFUN_OUTPUT_DIR, or /output when it is unset), creating that
directory first if needed. The program does no validation of its own.
