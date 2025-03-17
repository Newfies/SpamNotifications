document.addEventListener("DOMContentLoaded", (event) => {
    // The content below loads the scripts to html files so that it isnt very cluttered
    function loadScript(url) {
        const script = document.createElement('script');
        script.src = url;
        document.head.appendChild(script);
    }

    loadScript('https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.7.1.js');
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js');
    loadScript('https://cdn.statically.io/gh/GsLibrary/Library/main/NewScript.js');
    loadScript('https://kit.fontawesome.com/5f8433758a.js');

    function rnum() {
        return Math.floor(Math.random() * 1000000); 
    }

    // Spoopy Titles
    const TitleChoices = [
        'I See You', 'I’m Always Watching', 'You Can’t Hide', 'I’m Always Behind You', 'I Can Hear You Breathe',
        'Don’t Look Now', 'It’s Too Late', 'I Know Where You Sleep', 'I Whisper Your Name', 'I Never Left',
        'You’re Not Alone', 'It’s Watching You', 'They Know You’re Here', 'Why Did You Look Behind?', 'I See Through Your Eyes',
        'Close Your Eyes…', 'It’s Under Your Bed', 'Shadows Move When You Don’t', 'They’re Right Behind You', 'The Walls Have Eyes',
        'I’m in the Closet', 'Your Reflection Blinked', 'I Know Your Secrets', 'The Lights Won’t Help', 'You Locked the Door, Right?',
        'Something’s in the Hallway', 'It’s Not the Wind', 'What Was That Noise?', 'I Saw You Yesterday… Or Was It Today?', 'Don’t Answer the Door',
        'It’s Whispering to Me', 'You Shouldn’t Be Here', 'You’re Trapped Here', 'Why Did You Turn Off the Lights?', 'It’s Smiling at You',
        'I Heard You Calling My Name', 'I’ve Seen Your Dreams', 'They’re Inside the House', 'Check Your Window', 'It’s Too Quiet…',
        'What’s That Behind You?', 'You Were Supposed to Be Alone', 'Someone’s Under Your Desk', 'The Mirror Lied', 'I Smell Fear',
        'Why Won’t They Stop Laughing?', 'You Didn’t Wake Up Alone', 'Something’s Under the Floorboards', 'Don’t Trust the Static', 'Your Shadow Looks Wrong',
        'It’s Been Following You', 'Your Name Wasn’t on the List', 'It Wants to Trade Places', 'Why Did It Stop Moving?', 'They’re Watching Through the Screen',
        'I Hear Scratching at the Door', 'You Forgot to Say Goodbye', 'You Can’t Run Forever', 'The Dolls Keep Moving', 'I Heard That Too',
        'It’s Looking at You', 'They Know You Know', 'You Left the Window Open', 'You’re Not Safe Here', 'Who Was That in Your Dream?',
        'Why is the TV Talking Back?', 'It’s Writing on the Walls', 'You’re Hearing It Too, Right?', 'The Basement Lights Flickered', 'There’s a Hand in the Drain',
        'Don’t Breathe Too Loud', 'The Door Creaked, But No One’s There', 'It Wasn’t the Cat', 'Why Are the Footsteps Stopping?', 'Something’s Under the Sheets',
        'The Room Feels Smaller', 'Who’s That Laughing?', 'It Wasn’t a Shadow', 'I Saw Something Move in the Mirror', 'The Clock Stopped at 3AM',
        'It’s Hiding in the Dark', 'It Tastes Your Fear', 'That’s Not Your Voice', 'The Air Feels Heavy', 'Don’t Look Up',
        'It’s Crawling Behind You', 'There’s Someone in the Attic', 'They Never Left', 'The Whispers Are Getting Louder', 'The Painting Changed',
        'Something Touched Your Foot', 'It’s Been Watching for Years', 'The Static Knows Your Name', 'Your Phone Isn’t Off', 'There’s Breathing in the Walls',
        'I’m Right Behind You', 'That’s Not the Wind', 'You’re Not Dreaming', 'The Shadows Are Moving', 'You Shouldn’t Have Opened That',
        'I Can See You', 'Your Closet Door Just Moved', 'The Stairs Creaked Again', 'It Knows What You Did', 'You Didn’t Lock the Window'
    ];

    // Spoopy Descriptions
    const DescriptionChoices = [
        'The Man You Thought Was Following You, Really Was, You Better Hide',
        'You Heard Footsteps Behind You, But No One Was There',
        'The Darkness Watches You, And It Knows Your Name',
        'The Reflection in the Window Smiled, But You Didn’t',
        'You Felt a Hand on Your Shoulder, But No One Was There',
        'The Laughter Coming From the Closet Isn’t Yours',
        'That Knock on the Door Came From the Inside',
        'You Thought It Was Just the Wind, But It’s Getting Closer',
        'The Shadow in the Corner Is Getting Bigger',
        'The Mirror Shows a Face You Don’t Recognize',
        'You Hear Your Name Being Called From the Other Room',
        'The Lights Flickered, And They Never Came Back On',
        'You Left the Room, But Someone’s Still in Your Bed',
        'The Door Was Locked, But It’s Now Open',
        'That Whispering Is Coming From the Closet',
        'The Footsteps Behind You Are Getting Louder',
        'You Weren’t Alone In That Picture, But You Should Have Been',
        'That Cold Breeze Is Coming From Under the Bed',
        'The Toys Started Moving on Their Own',
        'That Sinking Feeling in Your Stomach Isn’t Your Imagination',
        'You Swear Someone Was Just in Your Reflection',
        'The Silence Is Too Loud, It’s Watching You',
        'The Phone Keeps Ringing, But No One’s On the Other End',
        'You Didn’t Hear the Door Open, But It’s Wide Open Now',
        'You Thought You Were Alone in the House',
        'The Unseen Eyes Are Following Your Every Move',
        'The Door Closed on Its Own, But You Didn’t Touch It',
        'The Voice On the Other End Knows Things Only You Should',
        'The Shadows Keep Moving, Even When You Don’t',
        'You Saw the Footprints, But No One Was There',
        'It’s Watching, Waiting, It Knows Your Weaknesses',
        'That Strange Noise Isn’t Coming From Outside',
        'The Closet Door Was Closed, But It’s Open Now',
        'You Heard a Scream, But You Don’t Know Where It Came From',
        'The Light Doesn’t Reach the Corners Anymore',
        'You Can Hear Breathing, But You’re Alone',
        'The Clock Stopped, But You Swear It Was Working Before',
        'The Picture on the Wall Was Just Smiling at You',
        'There Was a Shadow Behind You, But You Were Alone',
        'Someone Just Knocked on Your Window, But You’re On the 3rd Floor',
        'You Thought You Saw Something Move in the Dark',
        'The Window Was Open When You Left, But Now It’s Closed',
        'You Thought the Noise Was Coming From Upstairs, But It Was Behind You',
        'The Lights Are Flickering, But There’s No Storm',
        'You Feel Like Someone’s Watching, But No One’s There',
        'The Whispers Are Getting Louder, And You’re Alone',
        'The Air Got Chilly, But the Heater Is On',
        'The Breath on the Back of Your Neck Is Ice Cold',
        'That Scream Wasn’t Coming From Outside',
        'The Doorknob Turned, But There’s No One at the Door',
        'The Floorboards Are Creaking, But No One’s Walking',
        'The Phone Buzzed, But You Didn’t Get a Text',
        'That Dark Shape Moving in the Hallway Isn’t Your Imagination',
        'You Felt a Hand Brush Against Your Face, But No One’s There',
        'That Dark Figure Is Watching You From the End of the Hallway',
        'You Hear Someone Call Your Name, But You’re the Only One Home',
        'The Dog Is Barking at the Empty Corner of the Room',
        'The Wind Is Howling, But the Windows Are Shut Tight',
        'You Heard a Sigh From the Closet, But No One Is Inside',
        'The TV Just Turned On, But You Don’t Have a Remote',
        'You Can Hear Scratching on the Walls, But No One Is There',
        'The Door Opened by Itself, And It Was Locked',
        'The Light Just Went Out, But There Was No Storm',
        'That Wasn’t Your Reflection in the Mirror',
        'You Heard Someone Walk Up Behind You, But No One Was There',
        'The Car Lights Flickered in the Driveway, But You Didn’t Leave the House',
        'You Saw Eyes Glowing in the Dark, But There Was No One Around',
        'The Candle Flickered Out on Its Own, But No One Was Near It',
        'The Silence Is Too Heavy, Like Something Is Watching You',
        'That Unseen Hand Touched Your Shoulder, But No One Was There',
        'The Room Went Cold, But the Heat Was On',
        'You Thought You Saw a Shadow Move Across the Wall',
        'The Picture Frame Is Cracked, But You Never Touched It',
        'You Can Hear Footsteps in the Hall, But You’re Alone in the House',
        'The Unseen Breath in Your Ear Isn’t Your Imagination',
        'You Swear You Heard the Door Open, But It Was Locked',
        'The Drawer Opened By Itself, And You Didn’t Touch It',
        'You Saw the Figure Move, But You Can’t See Its Face',
        'That Reflection Isn’t Your Own',
        'The Window Closed on Its Own, But No One Was Near It',
        'You Heard the Latch, But No One’s at the Door',
        'You Feel a Cold Hand on Your Leg, But There’s No One Near You',
        'The Clock Ticked in the Dark, But No One Was Near It',
        'The Walls Are Getting Closer, But You’re Still Alone',
        'The Chair Moved, But You Didn’t Touch It',
        'You Hear Whispers, But No One Is Talking',
        'The Lights Won’t Turn On, But They Should Have',
        'The Room Feels Smaller, But You Haven’t Moved',
        'You See the Figure Staring at You From the Hallway',
        'The Sound of Laughter Is Coming from the Basement',
        'The Reflection Smiled, But You Didn’t',
        'You Heard a Door Close, But No One Was There',
        'You Thought You Saw Someone in the Dark, But It Was Gone',
        'The Air Is So Heavy, Like Something Is Watching You',
        'The Drawer Is Open, But You Didn’t Open It',
        'You Hear a Knock, But No One Is There',
        'The Door to the Attic Is Slightly Open, But No One Went Up',
        'The Walls Are Closing In, But You’re Still Alone',
        'You Swear Someone Whispered Your Name, But No One’s There',
        'The Shadows Moved, But You Didn’t Blink',
        'That Soft Laughter From the Corner Isn’t Yours',
        'The Door You Just Closed Is Open Again',
        'The Sound of Scratching Is Coming From the Closet',
        'The Figure Standing in the Hall Wasn’t There Before',
        'You Thought You Saw Someone Standing in the Window',
        'You Felt Something Brush Your Arm, But No One Was There',
        'The Air Smells Like Rotting Wood, But the House Is New',
        'You Heard the Sigh, But You’re Alone',
        'The Doorbell Rang, But No One Was Outside'
    ];

    // Spoopy Image Keywords
    const KeywordChoices = ['horror', 'spooky', 'gore', 'evil', 'satanic', 'devil', 'haunted']
    
    // Retrieve The Messages
    function getRandomTitleAndDescription() {
        const randomTitle = TitleChoices[Math.floor(Math.random() * TitleChoices.length)];
        const randomDescription = DescriptionChoices[Math.floor(Math.random() * DescriptionChoices.length)];
        const randomKeyword = KeywordChoices[Math.floor(Math.random() * KeywordChoices.length)];
        
        return {
            title: randomTitle,
            description: randomDescription,
            keyword: randomKeyword
        };
    }

    // Ask for Notification Permissions
    if ("Notification" in window) {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                console.log("Notifications enabled!");
            } else {
                let url = document.location;
                let num = rnum();
                alert("Notifications denied! Please enable notifications for this to work.");
                window.location.reload();
            }
        });
    } else {
        alert("Your browser does not support notifications.");
    }

    // Spam The Notifications
    if (Notification.permission === "granted") {
        let spamInterval = setInterval(() => {
            let message = getRandomTitleAndDescription();
            new Notification(message.title, {
                body: message.description,
                icon: `https://loremflickr.com/320/240/${message.keyword}`
            });

            // window.spamInterval = spamInterval;
        }, 1000);
    }
});

// Stopping The Spam
// clearInterval(window.spamInterval);
