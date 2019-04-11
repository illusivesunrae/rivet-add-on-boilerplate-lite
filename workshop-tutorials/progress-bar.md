# Rivet Add-on: Process Step Indicator
This add-on is intended to allow developers to create a vertical or horizontal bar, which indicates where a user is within a specific process. 

## How it should work
The process step indicator should reliably show where the user is within a given workflow, but also act as a form of navigation for users who need to move to different parts of the process.

## Progress bars in the wild
* [IU Application for Admission](https://sisjee.iu.edu/sisweb-prd/ad-rev/welcome/): This indicator takes the form of a left-side nav bar, and visually indicated what users have completed at-a-glance.

* [US Patent and Trademark Office](https://uspto.github.io/designpatterns/1.x/docs/components/stepIndicators.html): The USPTO Styleguide provides examples of both vertical and horizontal process step indicators.

* [W3C documentation](https://www.w3.org/WAI/tutorials/forms/multi-page/): The W3C provides information on how to build a process step indicator, and what it takes to make it accessible.

## Challenges
There are many important questions to keep in mind while building this add-on.

* Is what you built accessible? If not, what needs to change in order to make it accessible?
* How will your progress bar behave on mobile? How can you make it better for the mobile experience?