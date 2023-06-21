![Blog-app](/assets/images/blog.jpg)

## React Blog App

This React application is designed as a blog platform where users can read news and find information on various topics. It provides a user-friendly interface and includes features such as category-based searching and filtering.

## Features

* Blog Posts: The app displays a collection of blog posts, each containing a title, description, author name, publication date, and a cover image.

* Category Filtering: Users can filter the blog posts based on different categories such as development, technology, health, finance, art, self-improvement, and more.

* Search Functionality: The app allows users to search for specific blog posts using keywords. 

* Responsive Design: The app is built with a responsive design, ensuring optimal viewing and interaction across various devices and screen sizes.

* User-Friendly Interface: The interface is intuitive and easy to navigate, providing a seamless reading experience for users.

## About the Components
### App Component

The App component serves as the entry point of the application. It sets up routing using the react-router-dom package. Inside the BrowserRouter component, there is a <Routes> component that defines the routes of the application.

* The '/' route is associated with the Home component using the <Route> component. It specifies that when the root URL is accessed, the Home component should be rendered.

* The '/blog/:id' route is associated with the Blog component using another <Route> component. It defines a dynamic route parameter :id, which can be used to fetch and display a specific (individual)blog post.

### Home Component

The Home component represents the home page of the application. It includes the following functionalities:

* State Management: It utilizes the useState hook to manage state variables blogs and searchTerm. The blogs state variable holds an array of blog data, and the searchTerm state variable holds the current search term entered by the user.

* Filtering Blogs: When the user submits the search form, the onSubmit function is triggered. It prevents the default form submission behavior and filters the blog data based on the search term.

* Handling Search Input: The onChange function is called whenever the search input value changes. It updates the searchTerm state variable with the new value.

* Clearing Search: The clearSearch function is used to reset the search term and restore the original blog data.


