### Front End

The Front End consists of the About page, the Generator page and the Library page.

The About page consists of the team.
Blake Fletcher is the Project Manager, who is instrumental in guiding the built-out of React components.
The rest of the team are, Apt, Josh and Tony. We built both the frontend and backend of the application.

The Generator page gives user the option to select song of certain configuration to be built on another server and downloaded locally to user workstation. The user can then play the download song in midi raw format.

The Library page contained songs that have been trained by Keras LSTM Recurrent Neural Network model to play in the style of the related composer. The model trained songs are stored in Contentful website. Contentful website provides object content management and delivered as json object. The Library page is built using React and Material-UI Card library. The Library page was built to query content type stored in Contentful website using Contentful api library. Contentful website packaged each specific content type into json object and delivered to Library page which then extracted and formatted into React Material-UI card specification. Each card was then coded with a play and stop function to play MP3 formatted song.
