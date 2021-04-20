# widgets

This is a **React** application that includes four different widgets put together. These widgets will be:

- **An Accordion widget** : An accordion is a graphical control element comprising of a vertically stacked list of items, such as labels. Each item can be 'expanded' or 'collapsed' to reveal the content associated with that item. There can be zero expanded items, or exactly one item expanded at a time.

- **A Wikipedia API search widget** : It shows a text input at the top where a user can type some *term*. Then it takes the *term* entered by the user and performs a search of the **Wikipedia API** and shows a list of results below. The list consists of the title of the article searched for and a brief description of the article following it.

- **A Dropdown item selection widget** : It's overall goal is to show a list of options to the user. When a user clicks on it, a menu is going to open up. For this widget, the dropdown will show a list of different color options that a user can select. Whenever user changes a color option, the corresponding text's color will immediately change to reflect it. The dropdown is reusable since the different options provided inside it can be customized. 

- **A Google Translate API widget** : A user can enter some text in the input field and select a language from the dropdown. The text gets translated and the result is displayed at the bottom of the screen as output. This widget reuses the dropdown widget component by customizing the list of options shown inside it. Instead of colors, the dropdown will show a list of languages that a user can select.

The Widgets application also implements **navigation** built using Javascript and React. The Header at the top of the page will have links that a user can click on, to go and look at the different widgets on the screen. The different widgets will be shown to the user based upon the current url that they are visiting. This will enable the user to navigate between the different widget components that were built. 

This App is created with ***create-react-app*** and is deployed with ***Netlify***. Click on the following link to try it. **[widgets](https://stupefied-hodgkin-a3c4e3.netlify.app/)**
