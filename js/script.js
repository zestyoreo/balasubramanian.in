var commandText = function(text){
  return "[[g;#37eb2f;]" + text + "]";
}

var bluetext = function(text){
  return "[[;#118cfa;]" + text + "]";
}

var glowbluetext = function(text){
  return "[[g;#118cfa;]" + text + "]";
}

var whitetext = function(text){
  return "[[;#ffffff;]" + text + "]";
}

var redtext = function(text){
  return "[[;#fa2411;]" + text + "]";
}

var titleText = function(text){
  return "[[u;inherit;]" + text + "]";
}

var App = {
  intro: function(ret){
    if (typeof ret === 'undefined') ret = false;
    var bannertxt = 
    " _          _ \n"+
    "| |__  __ _| |   __ _ \n"+
    "|  _ \\/ _` | |_ / _` |\n"+
    "|_,__/\\__,_|___)\\__,_| \t\t\t\t\t\t\t\t\t\t\t© 2022\n\n";

    var greetText = 
    "Welcome, You have reached " + commandText('Balasubramanian P') + "  -  undergrad and AI practitioner.\n"+
    "Please type " +bluetext('ls')+ " or " +bluetext('commands')+  " followed by the ENTER key to access a list of commands.\n";
    if (!ret) {
        this.echo("\n" + whitetext(bannertxt) + greetText+"\n");
    } else {
        return whitetext(bannertxt)+greetText;
    }
  },
  ls: function(){
    this.echo();
    this.echo(bluetext("|  ") + commandText("about") +bluetext("              - About Me"));
    this.echo();
    this.echo(bluetext("|  ") + commandText("projects") + bluetext("           - Projects"));
    this.echo(bluetext("|  ") + commandText("courses") + bluetext("            - Course notes"));
    this.echo();
    this.echo(bluetext("|  ") + commandText("skills") + bluetext("             - Technical Proficiencies"));    
    this.echo(bluetext("|  ") + commandText("work") + bluetext("               - Professional Experience"));
    this.echo(bluetext("|  ") + commandText("resume") + bluetext("             - My Resumé"));
    this.echo();
    this.echo(bluetext("|  ") + commandText("social") + bluetext("             - Find me on the internet"));
    this.echo(bluetext("|  ") + commandText("contact") + bluetext("            - Connect with me"));
    this.echo(bluetext("|  ") + commandText("credits") + bluetext("            - How I made this website"));
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  command:function(){
    this.exec('commands');
  },
  commands: function(){
    this.echo();
    this.echo(bluetext("|  ") + commandText("about") +bluetext("              - About Me"));
    this.echo();
    this.echo(bluetext("|  ") + commandText("projects") + bluetext("           - Projects"));
    this.echo(bluetext("|  ") + commandText("courses") + bluetext("            - Course notes"));
    this.echo();
    this.echo(bluetext("|  ") + commandText("skills") + bluetext("             - Technical Proficiencies"));    
    this.echo(bluetext("|  ") + commandText("work") + bluetext("               - Professional Experience"));
    this.echo(bluetext("|  ") + commandText("resume") + bluetext("             - My Resumé"));
    this.echo();
    this.echo(bluetext("|  ") + commandText("social") + bluetext("             - Find me on the internet"));
    this.echo(bluetext("|  ") + commandText("contact") + bluetext("            - Connect with me"));
    this.echo(bluetext("|  ") + commandText("credits") + bluetext("            - How I made this website"));
    this.echo();
    this.echo();
    this.echo(bluetext("Other commands Available:"));
    this.echo(" "+commandText("reload")+","+commandText("mail")+","+commandText("iitbmail")+","+commandText("fullscreen ")+"or "+commandText("fs")+","+commandText("help ")+"or "+commandText("menu")+",");
    this.echo(" "+commandText("rm")+","+commandText("cd")+","+commandText("pwd")+","+commandText("cp")+","+commandText("du")+","+commandText("find ")+"or "+commandText("grep")+","+commandText("cls ")+"or "+commandText("clear")+","+commandText("mv")+","+commandText("sudo")+",");
    this.echo(" "+commandText("github")+","+commandText("git")+","+commandText("linkedin")+","+commandText("insta")+","+commandText("twitter")+","+commandText("fb")+","+commandText("medium ")+"or "+commandText("blog")+","+commandText("gmail "));
    window.scrollTo(0, document.body.scrollHeight);
  },
  info: function(command){
    this.exec('contact');
  },
  contactinfo: function(command){
    this.exec('contact');
  },
  full: function(){
    this.exec('fullscreen');
  },
  fs: function(){
    this.exec('fullscreen');
  },
  fullscreen: function(){
    document.documentElement.requestFullscreen().catch((e)=>{
      console.log(e);
    }) ;
  },
  hello: function(){
    this.echo();
    this.echo("|  "+commandText("Welcome to my personal website!"));  
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  contact: function(){
    this.echo();
    this.echo(commandText("Contact Details"));  
    this.echo("\tP Balasubramanian");
    this.echo("\tT1,433, Shakthi Apts,Ramasamy Salai");
    this.echo("\tK.K.Nagar Chennai-78");
    this.echo("\t8939623615");
    this.echo("\tzestyoreo9@gmail.com")
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  rm: function(command){
    this.echo();
    this.echo("|  Don't mess with the code bruh!");  
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  cd: function(command){
    if(command){
      this.exec(command);  
    }else{
      this.echo("|  directory is not selected.");
      window.scrollTo(0, document.body.scrollHeight);
    }
  },
  find: function(command){
    if(command){
      this.exec(command);  
    }else{
      this.echo("|  Please enter what you are looking for.");
      window.scrollTo(0, document.body.scrollHeight);
    }
  },
  grep: function(command){
    if(command){
      this.exec(command);  
    }else{
      this.echo("|  Please enter what you are looking for.");
      window.scrollTo(0, document.body.scrollHeight);
    }
  },
  help: function(){
    this.echo();
    this.echo(bluetext("|  ") + commandText("about") +bluetext("              - About Me"));
    this.echo();
    this.echo(bluetext("|  ") + commandText("projects") + bluetext("           - Projects"));
    this.echo(bluetext("|  ") + commandText("courses") + bluetext("            - Course notes"));
    this.echo();
    this.echo(bluetext("|  ") + commandText("skills") + bluetext("             - Technical Proficiencies"));    
    this.echo(bluetext("|  ") + commandText("work") + bluetext("               - Professional Experience"));
    this.echo(bluetext("|  ") + commandText("resume") + bluetext("             - My Resumé"));
    this.echo();
    this.echo(bluetext("|  ") + commandText("social") + bluetext("             - Find me on the internet"));
    this.echo(bluetext("|  ") + commandText("contact") + bluetext("            - Connect with me"));
    this.echo(bluetext("|  ") + commandText("credits") + bluetext("            - How I made this website"));
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  menu: function(){
    this.echo();
    this.echo(bluetext("|  ") + commandText("about") +bluetext("              - About Me"));
    this.echo();
    this.echo(bluetext("|  ") + commandText("projects") + bluetext("           - Projects"));
    this.echo(bluetext("|  ") + commandText("courses") + bluetext("            - Course notes"));
    this.echo();
    this.echo(bluetext("|  ") + commandText("skills") + bluetext("             - Technical Proficiencies"));    
    this.echo(bluetext("|  ") + commandText("work") + bluetext("               - Professional Experience"));
    this.echo(bluetext("|  ") + commandText("resume") + bluetext("             - My Resumé"));
    this.echo();
    this.echo(bluetext("|  ") + commandText("social") + bluetext("             - Find me on the internet"));
    this.echo(bluetext("|  ") + commandText("contact") + bluetext("            - Connect with me"));
    this.echo(bluetext("|  ") + commandText("credits") + bluetext("            - How I made this website"));
    this.echo()
    this.echo(bluetext("|  ") + commandText("all") + bluetext("                -") +" Run all commands (recommended)");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  social: function(){
    this.echo();
    this.echo("|  " + commandText("GitHub") + ":       https://github.com/zestyoreo");
    this.echo("|  " + commandText("LinkedIn") + ":     https://www.linkedin.com/in/balasubramanian-p-991059148/");
    this.echo("|  " + commandText("Medium") + ":       https://medium.com/@zestyoreo9");
    this.echo("|  " + commandText("Twitter") + ":      https://twitter.com/zestyoreo");
    this.echo("|  " + commandText("Instagram") + ":    https://www.instagram.com/zesty_oreo/?hl=en");
    this.echo("|  " + commandText("Facebook") + ":     https://www.facebook.com/people/Balasubramanian-Poovanan/100015812881087/");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  reload: function(){
    window.location.reload();
  },
  git: function(){
    this.echo();
    this.echo("|  https://github.com/zestyoreo");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  github: function(){
    this.echo();
    this.echo("|  https://github.com/zestyoreo");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },

  linkedin: function(){
    this.echo();
    this.echo("|  https://www.linkedin.com/in/balasubramanian-p-991059148/");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  twitter: function(){
    this.echo();
    this.echo("|  https://twitter.com/zestyoreo");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  insta: function(){
    this.echo();
    this.echo("|  https://www.instagram.com/zesty_oreo/?hl=en");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  instagram: function(){
    this.echo();
    this.echo("|  https://www.instagram.com/zesty_oreo/?hl=en");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  fb: function(){
    this.echo();
    this.echo("|  https://www.facebook.com/people/Balasubramanian-Poovanan/100015812881087/");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  facebook: function(){
    this.echo();
    this.echo("|  https://www.facebook.com/people/Balasubramanian-Poovanan/100015812881087/");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },

  mail: function(){
    this.echo();
    this.echo(bluetext("|  ")+"  mailto:balan@cse.iitb.ac.in");
    this.echo(bluetext("|  ")+"  mailto:zestyoreo9@gmail.com ");
    this.echo(bluetext("|  ")+"  mailto:200050103@iitb.ac.in");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  iitbmail: function(){
    this.echo();
    this.echo(bluetext("|  ")+"  mailto:balan@cse.iitb.ac.in");
    this.echo(bluetext("|  ")+"  mailto:200050103@iitb.ac.in");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  gmail: function(){
    this.echo();
    this.echo(bluetext("|  ")+"  mailto:zestyoreo9@gmail.com ");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  medium: function(){
    this.echo();
    this.echo(bluetext("|  ")+"  https://medium.com/@zestyoreo9");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  blog: function(){
    this.echo();
    this.echo(bluetext("|  ")+"  https://medium.com/@zestyoreo9");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  exp: function(){
    this.exec('work');
  },
  works: function(){
    this.exec('work');
  },
  work: function(){
    this.echo();
    this.echo("|  " + commandText('Unmesh Mashruwala Innovation Cell IITB') + "                            ");
    this.echo("|    • "+whitetext("Team Manager")+"                                                                  (Mumbai; May 2022 – Present)");
    this.echo("|    • "+whitetext("Senior ML/CV Engineer")+"                                                         (Mumbai; April 2022 – Present)");
    this.echo("|    • "+whitetext("Coordinator, Project AeRoVe")+"                                                   (Mumbai; January 2021 – May 2022) ");
    this.echo("|    • "+whitetext("Junior Engineer ")+"in the Machine Learning & Computer Vision division            (Mumbai; April 2021 – April 2022)");
    this.echo("|");
    this.echo("|  " + commandText('Education') + "                            ");
    this.echo("|    • "+whitetext("B.Tech in Computer Science")+" : "+bluetext("Indian Institute of Technology Bombay")+"            (Mumbai; October 2020-Present)");
    this.echo("|\t\t\t\t\t\t\t\t\t*Third Year Undergrad\n|\t\t\t\t\t\t\t\t\t*Batch of 2024");
    this.echo("|    • "+whitetext("12th Grade")+"                 : "+bluetext("PSBBSSS K.K.Nagar")+"                                (Chennai; June 2005-September 2020)");
    this.echo("|\t\t\t\t\t\t\t\t\t*Proud ex-PSBBian, Batch of 2020 \n|\t\t\t\t\t\t\t\t\t*Studied KG-Grade 12 at Padma Seshadri Bala Bhavan Senior Secondary School. \n|\t\t\t\t\t\t\t\t\t*Topper in Grade 12 with a score of 491/500 (98.2%) \n|\t\t\t\t\t\t\t\t\t*Topper in Grade 10 with a score of 494/500 (98.8%).");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  whoami: function(){
    this.exec('about');
  },
  about: function(){
    this.echo();
    this.echo("|  "+bluetext("Name:  ")+"       "+ commandText('Balasubramanian P'));
    this.echo("|");
    this.echo("|  "+bluetext("About: ")+"       "+ "I am an undergrad senior pursueing "+ commandText("CSE")+" at "+ "Indian Institute of Technology Bombay ("+commandText("IITB")+")");
    this.echo("|                I am an avid coder and "+ commandText("AI practitioner")+" interested in "+ commandText("Reinforcement Learning")+" and"+ commandText(" Deep Learning."));
    this.echo("|                I am also ardent reader and rabbit aficionado. I am always on the lookout for opportunities"); 
    this.echo("|                to meet and collaborate with amazing people on awesome projects.");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  skill: function(){
    this.exec('skills');
  },
  skills: function(){
    this.echo("|");
    this.echo("|  [[g;#118cfa;]Coding Languages] ");
    this.echo("|  " + commandText('C++') + "                    ##[[g;#5BD100;]###################################################] ##");
    this.echo("|  " + commandText('Python') + "                 ##[[g;#5BD100;]##################################################]  ##"); 
    this.echo("|  " + commandText('C') + "                      ##[[g;#5BD100;]#################################################]   ##");
    this.echo("|  " + commandText('Bash') + "                   ##[[g;#B2D100;]############################################]        ##");    
    this.echo("|  " + commandText('Java') + "                   ##[[g;#B2D100;]#######################################]             ##"); 
    this.echo("|  " + commandText('R') + "                      ##[[g;#D13F00;]#############################]                       ##");
    this.echo("|  " + commandText('Matlab') + "                 ##[[g;#D13F00;]#############################]                       ##");           
    this.echo("|  " + commandText('Javascript') + "             ##[[g;#D13F00;]#######################]                             ##");  
    this.echo("|");
    this.echo("|  [[g;#118cfa;]ML, DL and CV] ");
    this.echo("|  " + commandText('TensorFlow') + "             ##[[g;#5BD100;]##################################################]  ##");
    this.echo("|  " + commandText('PyTorch') + "                ##[[g;#5BD100;]###############################################]     ##");
    this.echo("|  " + commandText('scikit-learn') + "           ##[[g;#5BD100;]##############################################]      ##");
    this.echo("|  " + commandText('OpenCV') + "                 ##[[g;#5BD100;]#############################################]       ##");
    this.echo("|  " + commandText('Numpy') + "                  ##[[g;#5BD100;]#############################################]       ##");
    this.echo("|  " + commandText('Pandas') + "                 ##[[g;#5BD100;]############################################]        ##");
    this.echo("|  " + commandText('OpenAI-gym') + "             ##[[g;#B2D100;]##########################################]          ##");
    this.echo("|  " + commandText('Scipy') + "                  ##[[g;#B2D100;]#########################################]           ##");
    this.echo("|  " + commandText('TensorRT') + "               ##[[g;#B2D100;]#######################################]             ##");
    this.echo("|  " + commandText('Kaldi ASR') + "              ##[[g;#D13F00;]##################################]                  ##");
    this.echo("|  " + commandText('Coqui STT') + "              ##[[g;#D13F00;]#################################]                   ##");
    this.echo("|  " + commandText('mxnet') + "                  ##[[g;#D13F00;]#########################]                           ##");
    this.echo("|");
    this.echo("|  [[g;#118cfa;]Robotics] ");
    this.echo("|  " + commandText('Arduino') + "                ##[[g;#5BD100;]##################################################]  ##"); 
    this.echo("|  " + commandText('ROS') + "                    ##[[g;#B2D100;]##############################################]      ##");
    this.echo("|  " + commandText('Gazebo') + "                 ##[[g;#B2D100;]###################################]                 ##");
    this.echo("|  " + commandText('Fusion360') + "              ##[[g;#D13F00;]#################]                                   ##");    
    this.echo("|");
    this.echo("|  [[g;#118cfa;]Web and Mobile Development] ");
    this.echo("|  " + commandText('Flask') + "                  ##[[g;#5BD100;]##############################################]      ##");
    this.echo("|  " + commandText('Django') + "                 ##[[g;#5BD100;]############################################]        ##");
    this.echo("|  " + commandText('CSS') + "                    ##[[g;#B2D100;]######################################]              ##");
    this.echo("|  " + commandText('HTML') + "                   ##[[g;#B2D100;]######################################]              ##");
    this.echo("|  " + commandText('Android') + "                ##[[g;#B2D100;]#####################################]               ##");
    this.echo("|  " + commandText('Heroku') + "                 ##[[g;#D13F00;]############################]                        ##");
    this.echo("|");
    this.echo("|  [[g;#118cfa;]Database] ");
    this.echo("|  " + commandText('MySQL') + "                  ##[[g;#5BD100;]############################################]        ##");
    this.echo("|  " + commandText('PostGre-SQL') + "            ##[[g;#B2D100;]##################################]                  ##");
    this.echo("|");
    this.echo("|  [[g;#118cfa;]Languages] ");
    // this.echo("|");
    this.echo("|  " + commandText('Tamil') + "                  ##[[g;#5BD100;]###################################################] ##");
    this.echo("|  " + commandText('English') + "                ##[[g;#5BD100;]##################################################]  ##");
    this.echo("|  " + commandText('Hindi') + "                  ##[[g;#B2D100;]#######################################]             ##");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  credit: function(){
    this.exec('credits');
  },
  credits: function(){
    this.echo();
    this.echo("|  Site built by " + commandText('Balasubramanian P'));
    this.echo("|  Using " + bluetext('Jquery Terminal Emulator') + " by " + bluetext('Jakub Jankiewicz') + ": http://terminal.jcubic.pl");
    this.echo("|  Thanks to " + bluetext('Examples Page') + " for providing this template : http://terminal.jcubic.pl/examples.php");        
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  project: function(){
    this.exec('projects');
  },
  projects: function(){
    window.location.href = "https://github.com/zestyoreo";
  },
  course: function(){
    window.location.href = "https://github.com/zestyoreo/iitb_courses";
  }, 
  courses: function(){
    window.location.href = "https://github.com/zestyoreo/iitb_courses";
  },   
  resumé: function(){
    window.location.href = "./Balasubramanian_Resume.pdf";
   },   
  resume: function(){
   window.location.href = "./Balasubramanian_Resume.pdf";
  },   
  cls: function(){
    this.exec('clear');
  },
  clr: function(){
    this.clear();
  },
  clear: function(){
    this.clear();
  },
  echo: function(command){
    this.echo(command);
    window.scrollTo(0, document.body.scrollHeight);
  },
  all: function(){
    this.echo();
    this.echo("Nah Uh!");
    // this.clear();
    // this.exec('intro');
    // this.exec('about');
    // this.exec('work');
    // this.exec('projects');
    // this.exec('skills');
    // this.exec('awards');
    // this.exec('social');
    // this.exec('contact');
    // this.exec('resume');
  },
  du: function(){
    this.echo();
    this.echo("|  69%");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  mv: function(command){
    this.echo();
    this.echo("|  Don't do this!");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  pwd: function(){
    this.echo();
    this.echo("|  Home");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  cp: function(){
    this.echo();
    this.echo("|  Don't copy!");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  mkdir: function(){
    this.echo();
    this.echo("|  To Do what?");
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  },
  sudo: function(command){

    this.echo();
    this.echo(bluetext("|  ")+"  Who are you?");
    setTimeout(() => { console.log("sudo"); }, 2000);
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
    this.echo();
    window.scrollTo(0, document.body.scrollHeight);
  }
}

jQuery(document).ready(function($) {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('body').terminal(App, {
      greetings: function(cb){
        that = this;
        // cb(App.intro(true));
        cb(App.mobile());
      },

      onBlur: function() {
        // prevent loosing focus
        return false;
      },
      completion: true,
      checkArity: false
    });    
  } else {
    $('body').terminal(App, {
      greetings: function(cb){
        cb(App.intro(true));
      },

      onBlur: function() {
          // prevent loosing focus
          return false;
      },
      completion: true,
      checkArity: false
    });
  }
});
