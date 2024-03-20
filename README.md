# Web Development Project 4 - *PokeGenerator*

Submitted by: **Kyle Vong**

This web app: **This web app is like a pokedex, but you have no control over what you will find. The user can discover new pokemon, learn about their attributes, ban certain attributes in their searches, and view past searches in the history component.**

Time spent: **4.5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data**
- [X] **Only one item/API call is viewable at a time**
- [X] **API calls appear random to the user**
- [X] **At least one image is displayed per API call**
- [X] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
- [X] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**

The following **optional** features are implemented:

- [X] Multiple types of attributes can be added to the ban list
- [X] Users can see a stored history of their previously viewed items from their session

The following **additional** features are implemented:

* [X] Can ban multiple attributes
* [X] Can unban attributes to widen api call
* [X] Red outline on banned attribute
      

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://i.imgur.com/bKFhOeI.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap!
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

The biggest challenge was creating the pokemon history. I had trouble with storage because after a certain amount of api calls, the history state variable would have exceeded quota and the website would crash. To deal with this, instead of storing the pokemon's entire data, I only stored what was necessary to be display in the gallery, which was the name and image. Now, you can click as much as you want without the website crashing. 

## License

    Copyright [2024] [Kyle Vong]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
