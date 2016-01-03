from setuptools import setup

setup(
    name='Gitoyen',
    version='1.0',
    py_modules=['gitoyen'],
    install_requires=[
        'Click',
        'pelican',
        'markdown',
        'ghp-import',
        'click',
        'path.py',
        'livereload',
        'beautifulsoup4',
    ],
    entry_points='''
        [console_scripts]
        gitoyen=gitoyen:cli
    '''

)
