function getBotResponse(input) {
    // Simple responses
    if (input == "hello") {
        return "Hello there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "commands") {
        return "Keywords/Commands: <br/><br/> <strong>menu</strong> - it will show our menu. <br/> <strong>about</strong> - it will show the 'about us'. <br/> <strong>contact</strong>- it will show 'contact info'. <br/> <strong>commands</strong> - it will show 'keyword'. <br/> <strong>how to order</strong> - it will show the instruction. <br/> <strong>location</strong> - it will show our address.";
    } else if (input == "menu") {
        return "Here's our menu: <br /><br /> ARABICA COFFEE BEANS - 5,000 <br /> BOTERO PURE -7,500 <br /> PATCH ROAST - 2,500 <br /> AMERICANO PURE - 3,500 <br /> SACRED GROUND - 15,000 <br /> PRESTO BEANS - 9,999";
    } else if (input == "about") {
        return "Hi there! <br /><br /> <strong>Rumi Beans</strong> a product of fervent coffee enthusiasm, weaves together a tapestry of rich history and diverse global flavors to curate unforgettable caffeinated experiences.";
    } else if (input == "contact") {
        return "Here's our contact information: <br /><br /> <strong>Email:</strong> rumibeans@gmail.com <br /> <strong>Phone Number:</strong> +92 333 786 786 <br /> <strong>Messenger:</strong> @rumibeans <br /> <strong>Address:</strong> Markaz G11/4,ISLAMABAD ";
    } else if (input == "how to order") {
        return "Hi There! <br /><br /> To order, you can go to our <strong>Menu</strong> section and click the <strong'Add to Cart'></strong> button of your choice. <br /><br /> I hope you understand. Thank you so much!";
    } else if (input == "location") {
        return "Here's our address: <strong>Markaz G11/4,ISLAMABAD</strong>";

    } else if (input == "who is the best teacher") {
        return "According to my research <strong>Mam Kanwal Batool</strong> is the best teacher.";
    }
    /* else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";   
    } */ else {
        return "Try asking something else!";
    }
}