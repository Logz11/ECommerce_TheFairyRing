<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <!------------------------------------------------------------>
    <title>Contact</title>
    <!---Don't forget to rename this stuff for future projects---->
    <meta name="description" content="Short description goes here">
    <meta name="keywords" content="1, 2, 3, 4, 5, 6, 7, 8, 9, 10">
    <meta name="viewport" content="width=device-width, initial-scale =1.0">
    <link rel="icon" href="Images/icon.jpg">
    <link rel="stylesheet" href="resources/css/styles.css">
    <!--<link rel="stylesheet" href="resources/css/grid.css">-->
    <link rel="stylesheet" href="resources/css/normalize.css">
    <script type="module" src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule="" src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js"></script>

</head>

<body>

    <header>
        <div class="logo-textbox">
            <a href="index.html"><img src="resources/images/the fairy ring- teal - burnt umber.png" alt="fairy ring logo"></a>
            <h1>contact</h1>
            <p>turning second-hand thrifts into<br>your hot style picks</p>
        </div>
    </header>

<nav>
    <div class="nav-container">
        <ul class="nav-list">
            <li class="list-item"><a href="index.html">home</a></li>
            <li class="list-item"><a href="portfolio.html">portfolio</a></li>
            <li class="list-item"><a href="shop.html">shop</a></li>
            <li class="list-item"><a href="about.html">about</a></li>
            <li class="list-item"><a href="contact.html">contact</a></li>
            <li class="list-item"><a href="cart.html">
                    <ion-icon name="cart"></ion-icon>
                </a></li>
            <li class="list-item"><a href="#">
                    <ion-icon name="planet" id="planet-icon" title="let the universe decide"></ion-icon>
                </a></li>
            <li class="list-item">
                <div class="nav-search-bar">
                    <input type="search">
                    <ion-icon name="search-outline"></ion-icon>
                </div>
            </li>
        </ul>
    </div>
</nav>

    <section class="section-form">
        <div class="heading-blurb-textbox textbox">
            <?php
            if (isset($_REQUEST['email1'])) { //if "email" variable is filled out, send email
            
            //Set admin email for email to be sent to (use you own MATC email address)
                $admin_email = "Reinkell@gmatc.matc.edu"; 

            //Set PHP variable equal to information completed on the HTML form
                $email = $_REQUEST['email1']; //Request email that user typed on HTML form
                $name = $_REQUEST['name']; //Request phone that user typed on HTML form
                $subject = $_REQUEST['form-subject']; //Request subject that user typed on HTML form
                $message = $_REQUEST['form-message']; //Request message that user typed on HTML form
            //Combine first name and last name, adding a space in between
                        
            //Start building the email body combining multiple values from HTML form    
                $body  = "From: " . $name . "\n"; 
                $body .= "Email: " . $email . "\n"; //Continue the email body
                $body .= "Message: " . $message; //Continue the email body
            
            //Create the email headers for the from and CC fields of the email     
                $headers = "From: " . $name . " <" . $email . "> \r\n"; //Create email "from"
                $headers .= "CC: " . $name . " <" . $email . ">"; //Send CC to visitor
                
            //Actually send the email from the web server using the PHP mail function
                mail($admin_email, $subject, $body, $headers); 
                
            //Display email confirmation response on the screen
                echo "<h2>thank you for contacting me!</h2>";
                echo "<p>i'll get back to you as soon as i can :)</p>";
                }
            
            //if "email" variable is not filled out, display an error
                else  { 
                    echo "<h2>there has been an error!</h2>";
                    echo"<p>so sorry about that! please try again later!</p>";
                }
            ?>
        </div>
        <form method="post" action="sendmail.php" name="contact-form" id ="contact-form" class="contact-form">
            <div class="form-name">
                <label for="name">name:</label>
                <input type="text" name="name" id="name" value="<?php echo $_REQUEST['name'] ?>" disabled>
            </div>
            <div class="form-email1">
                <label for="email1">email:</label>
                <input type="email" name="email1" id="email1" value="<?php echo $_REQUEST['email1'] ?>" disabled>
            </div>
            <div class="form-email2">
                <label for="name">confirm email:</label>
                <input type="email" name="email2" id="email2" value="<?php echo $_REQUEST['email1'] ?>" disabled>
            </div>
            </div>
            <div class="form-subject">
                <label for="subject">subject:</label>
                <input type="text" name="form-subject" id="form-subject" value="<?php echo $_REQUEST['form-subject'] ?>" disabled></input>
            </div>
            <div class="form-message">
                <label for="form-message">your message:</label>
                <textarea name="form-message" id="form-message" cols="30" rows="10" disabled><?php echo $_REQUEST['form-message'] ?></textarea>
            </div>
            <div class="form-submit">
                <input type="submit" name="submit" id="form-button" value="send">
            </div>
        </form>
    </section>

    <footer>
        <div class="footer-nav">
            <div class="page-links">
                <ul>
                    <li class="list-item"><a href="portfolio.html">portfolio</a></li>
                    <li class="list-item"><a href="shop.html">shop</a></li>
                    <li class="list-item"><a href="about.html">about</a></li>
                    <li class="list-item"><a href="contact.html">contact</a></li>
                </ul>
            </div>
            <div class="social-links">
                <ul>
                    <li class="list-item"><a href="https://www.facebook.com/alexandria.catherine.35">
                            <ion-icon name="logo-facebook" class="social-icon"></ion-icon>
                        </a></li>
                    <li class="list-item"><a href="https://twitter.com/">
                            <ion-icon name="logo-twitter" class="social-icon"></ion-icon>
                        </a></li>
                    <li class="list-item"><a href="https://www.etsy.com/"><i><img src="resources/images/etsy-logo.ico"
                                    class="social-icon"></i></a></li>
                </ul>
    
            </div>
        </div>
        <div class="center-copyright">
            <p>Copyright &copy; 2020</p>
        </div>
    </footer>



<script src="resources/js/scripts.js"></script>
</body>
