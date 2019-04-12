# Rivet Add-on: Configurable Horizontal Nav/Subheader
This add-on is intended to allow developers to create horizontal navigation that isn't attached to the main header. In this way, we hope to give developers a way of creating more advanced navigation or allow them to subdivide areas of an application without having to rely on deep drop down navigations.

## How it should work
The configurable horizontal nav should ideally be usable either full width or as a subsection within a grid. 

## Subheaders in the wild
Horizontal navigation is widely available. Below are a few examples:

* [Github Profile Navigation](https://github.com/gaearon): The sub-navigation for Github profile pages is a good example of a configurable sub-navigation, as it allows Github to create a secondary form of navigation that it unrelated to the global navigation available at the top left of every page.

* [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#Description): The Mozilla documentation website uses a configurable sub navigation as a form of in-page navigation. Much like the Github Profile navigation, it allows Mozilla to separate this secondary form of navigation from its global navigation.

## Challenges
There are many important questions to keep in mind while building this add-on.

* Is what you built accessible? If not, what needs to change in order to make it accessible? (hint: if you’re not sure where to start, think about how this should be affected by things like a skip-nav, etc.)
* How will your configurable subnav behave on mobile? How can you make it better for the mobile experience?