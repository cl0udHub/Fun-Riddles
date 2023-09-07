const riddles = [
    {
        question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
        choices: {
            A: "the letter 'M'",
            B: "a birthday cake",
            C: "a shooting star"
        },
        correctAnswer: "A"
    },
    {
        question: "It is a child of a circle and a rectangle",
        choices: {
            A: "square",
            B: "oval",
            C: "nothing"
        },
        correctAnswer: "B"
    },
    {   question: "What has keys but can't open locks?",
        choices: {
            A: "lock",
            B: "heart",
            C: "piano"
        },
        correctAnswer: "C"
    },
    {   question: "What has a heart that doesn't beat?",
        choices: {
            A: "camel",
            B: "beetroot",
            C: "artichoke"
        },
        correctAnswer: "C"
    },
    {   question: "I can speak without a mouth, hear without ears. I have no body but I come alive with the wind. What am I?",
        choices: {
            A: "noise",
            B: "echo",
            C: "bottle"
        },
        correctAnswer: "B"
    },
    {   question: "What has to be broken before you can use it?",
        choices: {
            A: "heart",
            B: "egg",
            C: "glass"
        },
        correctAnswer: "B"
    },
    {   question: "The more you take, the more you leave behind...",
        choices: {
            A: "footsteps",
            B: "bread-crumbs",
            C: "water"
        },
        correctAnswer: "A"
    },
    {   question: "What has a neck but no head?",
        choices: {
            A: "pen",
            B: "bottle",
            C: "umbrella"
        },
        correctAnswer: "B"
    },
    {   question: "What comes down but never goes up?",
        choices: {
            A: "shelf",
            B: "umbrella",
            C: "rain"
        },
        correctAnswer: "C"
    },
    {   question: "I am an odd number. Take away a letter and I become even. Who am I?",
        choices: {
            A: "eight",
            B: "six",
            C: "seven"
        },
        correctAnswer: "C"
    },
    {   question: "I am full of holes but I can still hold water. Who am I?",
        choices: {
            A: "sponge",
            B: "bathtub",
            C: "clouds"
        },
        correctAnswer: "A"
    },
    {   question: "What has cities, but no houses; forests but no trees; rivers but no water?",
        choices: {
            A: "sea",
            B: "sky",
            C: "map"
        },
        correctAnswer: "C"
    },
    {   question: "I have one eye but I can't see a thing. Who am I?",
        choices: {
            A: "cave",
            B: "needle",
            C: "spoon"
        },
        correctAnswer: "B"
    },
    {   question: "What belongs to you but other people use it more than you?",
        choices: {
            A: "phone",
            B: "name",
            C: "towel"
        },
        correctAnswer: "B"
    },
    {   question: "I have a head, a tail but no body. Who am I?",
        choices: {
            A: "bottle",
            B: "cup",
            C: "coin"
        },
        correctAnswer: "C"
    },
    {   question: "What has keys that can't open locks, space but no room and you can enter but not go outside?",
        choices: {
            A: "padlock",
            B: "guitar",
            C: "keyboard"
        },
        correctAnswer: "C"
    },
    {   question: "What is so fragile that saying its name could break it?",
        choices: {
            A: "silence",
            B: "scream",
            C: "glass"
        },
        correctAnswer: "A"
    },
    {   question: "What has a thumb and 4 fingers but isn't a hand?",
        choices: {
            A: "foot",
            B: "glove",
            C: "sock"
        },
        correctAnswer: "B"
    },
    {   question: "What has a face but no head, hands but no arms?",
        choices: {
            A: "face",
            B: "pillow",
            C: "clock"
        },
        correctAnswer: "C"
    },
    {   question: "What has a bottom at the top?",
        choices: {
            A: "roof",
            B: "foot",
            C: "leg"
        },
        correctAnswer: "C"
    },
    {   question: "What gets broken without being held?",
        choices: {
            A: "cup",
            B: "promise",
            C: "egg"
        },
        correctAnswer: "B"
    },
    {   question: "I have a ring but no finger. Who am I?",
        choices: {
            A: "phone",
            B: "bell",
            C: "hand"
        },
        correctAnswer: "A"
    },
    {   question: "What is always in bed but never sleeps?",
        choices: {
            A: "pillow",
            B: "baby",
            C: "river"
        },
        correctAnswer: "C"
    },
    {   question: "What is black when you buy it, red when you use it and grey when you throw it away?",
        choices: {
            A: "bag",
            B: "wood",
            C: "charcoal"
        },
        correctAnswer: "C"
    },
    {   question: "What has many teeth but can't bite?",
        choices: {
            A: "comb",
            B: "dog",
            C: "zipper"
        },
        correctAnswer: "A"
    },
    {   question: "I get wetter the more I dry. Who am I?",
        choices: {
            A: "rain",
            B: "towel",
            C: "bucket"
        },
        correctAnswer: "B"
    },
    {   question: "I'm tall when I'm young and short when I'm old. Who am I?",
        choices: {
            A: "fire",
            B: "candle",
            C: "pencil"
        },
        correctAnswer: "B"
    },
    {   question: "I'm not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth but water can kill me. ",
        choices: {
            A: "fire",
            B: "candle",
            C: "pencil"
        },
        correctAnswer: "A"
    },
    {   question: "The person who makes it, sells it; the person who buys it, never uses it; The person who uses it never knows they're using it. What is it?",
        choices: {
            A: "food",
            B: "chair",
            C: "coffin"
        },
        correctAnswer: "C"
    },
    {   question: "I'm not alive but I grow; I don't have lungs but I need air. Who am I?",
        choices: {
            A: "fire",
            B: "candle",
            C: "pencil"
        },
        correctAnswer: "B"
    },
    {   question: "I can travel around the world and still be quiet. Who am I?",
        choices: {
            A: "water",
            B: "noise",
            C: "wind"
        },
        correctAnswer: "C"
    },
    {   question: "I have branches, but no fruit, trunk or leaves. Who am I?",
        choices: {
            A: "tree",
            B: "bank",
            C: "hotel"
        },
        correctAnswer: "B"
    },
    {   question: "What is black when clean but white when dirty?",
        choices: {
            A: "coal",
            B: "sky",
            C: "chalkboard"
        },
        correctAnswer: "C"
    },
    {   question: "The more there is, the less you see. What is it?",
        choices: {
            A: "darkness",
            B: "light",
            C: "air"
        },
        correctAnswer: "A"
    },
    {   question: "I'm found in scarves, socks, mittens and sometimes in the paaws of playful kittens. Who am I?",
        choices: {
            A: "yarn",
            B: "fur",
            C: "hair"
        },
        correctAnswer: "A"
    },
    {   question: "I let you look right through a wall. Who am I?",
        choices: {
            A: "door",
            B: "mirror",
            C: "window"
        },
        correctAnswer: "C"
    },
    {   question: "What goes up and down but doesn't move?",
        choices: {
            A: "river",
            B: "staircase",
            C: "ball"
        },
        correctAnswer: "B"
    },
    {   question: "I have lots of eyes but can't see. Who am I?",
        choices: {
            A: "potato",
            B: "carrot",
            C: "tomato"
        },
        correctAnswer: "A"
    },
    {   question: "What has many needles but can't sew?",
        choices: {
            A: "cloth",
            B: "grandma",
            C: "christmass tree"
        },
        correctAnswer: "C"
    },
    {   question: "What kind of band never plays music?",
        choices: {
            A: "choir",
            B: "rubberband",
            C: "A cappella"
        },
        correctAnswer: "B"
    },
    {   question: "What has words but never speaks?",
        choices: {
            A: "book",
            B: "story",
            C: "mouth"
        },
        correctAnswer: "A"
    },
    {   question: "I can travel around the world without leaving my corner. Who am I?",
        choices: {
            A: "plane",
            B: "traveller",
            C: "stamp"
        },
        correctAnswer: "C"
    },
    {   question: "What building has the most stories?",
        choices: {
            A: "house",
            B: "library",
            C: "office"
        },
        correctAnswer: "B"
    },
    {   question: "It stalks the country-side with ears that cannot hear. What is it?",
        choices: {
            A: "corn",
            B: "mole-rat",
            C: "spider"
        },
        correctAnswer: "A"
    },
    {   question: "If two is a company and three is a crowd, what is four and five?",
        choices: {
            A: "words",
            B: "numbers",
            C: "nine"
        },
        correctAnswer: "C"
    },
    {   question: "Amory has 4 daughters and each of her daughters has a brother. How many children does Amory have?",
        choices: {
            A: "8",
            B: "9",
            C: "5"
        },
        correctAnswer: "C"
    },
    {   question: "Which one is heavier; A ton of bricks or a ton of feathers?",
        choices: {
            A: "feathers",
            B: "bricks",
            C: "neither"
        },
        correctAnswer: "C"
    },
    {   question: "What begins with an E and has only one letter?",
        choices: {
            A: "E",
            B: "Envelope",
            C: "Ewe"
        },
        correctAnswer: "B"
    },
    {   question: "I know a word containing 6 letters. Remove one letter and 12 remains. What is it?",
        choices: {
            A: "dozens",
            B: "story",
            C: "twelve"
        },
        correctAnswer: "A"
    },
    {   question: "What is 3/7 chicken, 2/3 cat and 2/4 goat?",
        choices: {
            A: "California",
            B: "Chicago",
            C: "Florida"
        },
        correctAnswer: "B"
    },
    {   question: "You see me once in June, twice in November and not at all in May. What am I?",
        choices: {
            A: "rain",
            B: "sunshine",
            C: "e"
        },
        correctAnswer: "C"
    },
    {   question: "What 4-letter word can be written forward, backward or upside down and can still be read from left to right?",
        choices: {
            A: "SooN",
            B: "EwE",
            C: "NooN"
        },
        correctAnswer: "C"
    },
    {   question: "What 5-letter word has one left when two are removed?",
        choices: {
            A: "stone",
            B: "story",
            C: "tyres"
        },
        correctAnswer: "A"
    },
    {   question: "What word is proounced the same when you take away 4 of its letters?",
        choices: {
            A: "blew",
            B: "queue",
            C: "stew"
        },
        correctAnswer: "B"
    },
    {   question: "What can fill a room but takes up no space?",
        choices: {
            A: "light",
            B: "air",
            C: "wind"
        },
        correctAnswer: "A"
    },
    {   question: "If you drop me, I'll crack but if you smile at me, I'll smile back. What am I?",
        choices: {
            A: "glass",
            B: "toy",
            C: "mirror"
        },
        correctAnswer: "C"
    },
    {   question: "People make me, save me, change me, raise me. What am I?",
        choices: {
            A: "money",
            B: "story",
            C: "choice"
        },
        correctAnswer: "A"
    },
    {   question: "I'm always hungry, but will die if not fed; but whatever I touch will soon turn red. Who am I?",
        choices: {
            A: "mystery",
            B: "fire",
            C: "lava"
        },
        correctAnswer: "B"
    },
    {   question: "With pointed fangs, I sit and wait. With piercing force I crunch out fate; grabbing victims and proclaiming might with a single bite. Who a I?",
        choices: {
            A: "snake",
            B: "lion",
            C: "stapler"
        },
        correctAnswer: "C"
    },
    {   question: "What has 4 wheels and flies?",
        choices: {
            A: "car",
            B: "garbage-truck",
            C: "plane"
        },
        correctAnswer: "B"
    },
    {   question: "What is red and smells like blue paint?",
        choices: {
            A: "spray",
            B: "blue paint",
            C: "red paint"
        },
        correctAnswer: "C"
    },
    {   question: "Poor people have it, rich people need it and if you eat it, you die. What is it?",
        choices: {
            A: "food",
            B: "poison",
            C: "nothing"
        },
        correctAnswer: "C"
    },
    {   question: "What runs but never walks; murmurs but never talks; has a bed but never sleeps?",
        choices: {
            A: "blanket",
            B: "river",
            C: "mouth"
        },
        correctAnswer: "B"
    },
    {   question: "Spelled forward, I am what you do every day. Spelled backwards, I am something bad. What am I?",
        choices: {
            A: "live",
            B: "life",
            C: "breathe"
        },
        correctAnswer: "A"
    },
    {   question: "You walk into a room with a match, kerosene-lamp and fireplace. What would you light first?",
        choices: {
            A: "match",
            B: "kerosene-lamp",
            C: "fireplace"
        },
        correctAnswer: "A"
    },
    {   question: "No matter how little or much you use me, you change me every month. Who am I?",
        choices: {
            A: "date",
            B: "story",
            C: "calendar"
        },
        correctAnswer: "C"
    },
    {   question: "If your uncle's sister is not your aunt, what is she to you?",
        choices: {
            A: "sister",
            B: "mother",
            C: "friend"
        },
        correctAnswer: "B"
    },
    {   question: "Take one out and scratch my head, I am now black but once was red. Who am I?",
        choices: {
            A: "match",
            B: "comb",
            C: "fire"
        },
        correctAnswer: "A"
    },
    {   question: "Until I am measured, I am not known; yet you miss me when I have flown...",
        choices: {
            A: "bird",
            B: "story",
            C: "time"
        },
        correctAnswer: "C"
    },
    {   question: "How much dirt is in a hole?",
        choices: {
            A: "none",
            B: "a ton",
            C: "a bit"
        },
        correctAnswer: "A"
    },
    {   question: "What word in the dictionary is spelled incorrectly?",
        choices: {
            A: "orthodoxe",
            B: "merchandice",
            C: "incorrectly"
        },
        correctAnswer: "C"
    },
    {   question: "What do you throw out when you want to use it but take it in when you don't want to use it?",
        choices: {
            A: "trash",
            B: "anchor",
            C: "food"
        },
        correctAnswer: "B"
    },
    {   question: "Forwards I am very heavy. backwards I'm not...",
        choices: {
            A: "load",
            B: "brick",
            C: "ton"
        },
        correctAnswer: "C"
    },
    {   question: "What has 3 letters and starts with gas?",
        choices: {
            A: "gas",
            B: "cat",
            C: "car"
        },
        correctAnswer: "C"
    },
    {   question: "What goes up but never comes down?",
        choices: {
            A: "rain",
            B: "age",
            C: "numbers"
        },
        correctAnswer: "B"
    },
    {   question: "What is harder to catch the faster you run?",
        choices: {
            A: "thief",
            B: "kite",
            C: "breath"
        },
        correctAnswer: "C"
    },
    {   question: "What flowers are kissable?",
        choices: {
            A: "tulips",
            B: "roses",
            C: "lilies"
        },
        correctAnswer: "A"
    },
    {   question: "What has words but never speaks?",
        choices: {
            A: "book",
            B: "story",
            C: "mouth"
        },
        correctAnswer: "A"
    },
    {   question: "What kind of tree can you carry in your hand?",
        choices: {
            A: "apple tree",
            B: "sequoia",
            C: "palm tree"
        },
        correctAnswer: "C"
    },
    {   question: "Where is the only place where today comes before yesterday?",
        choices: {
            A: "today",
            B: "dictionary",
            C: "yesterday"
        },
        correctAnswer: "B"
    },
    {   question: "What type of cheese is made backwards?",
        choices: {
            A: "cheddar",
            B: "parmesan",
            C: "edam"
        },
        correctAnswer: "C"
    },
    {   question: "Who has married many people but has never been married himself?",
        choices: {
            A: "priest",
            B: "groom",
            C: "bride"
        },
        correctAnswer: "A"
    },
    {   question: "If you throw a blue stone in the Red Sea, it becomes...",
        choices: {
            A: "red",
            B: "white",
            C: "wet"
        },
        correctAnswer: "C"
    },
    {   question: "What has 3 feet but cannot walk?",
        choices: {
            A: "table",
            B: "yard-stick",
            C: "chair"
        },
        correctAnswer: "B"
    },
    {   question: "I'm easy to lift but hard to throw. What am I?",
        choices: {
            A: "stone",
            B: "feather",
            C: "sand"
        },
        correctAnswer: "B"
    },
    {   question: "What can you catch but never throw?",
        choices: {
            A: "cold",
            B: "water",
            C: "air"
        },
        correctAnswer: "A"
    },
    {   question: "Which fish costs the most?",
        choices: {
            A: "octopus",
            B: "shark",
            C: "goldfish"
        },
        correctAnswer: "C"
    },
    {   question: "What is found on the ground but never gets dirty?",
        choices: {
            A: "shadow",
            B: "carpet",
            C: "earth"
        },
        correctAnswer: "A"
    },
    {   question: "What has one head, one foot and 4 legs?",
        choices: {
            A: "clock",
            B: "bed",
            C: "table"
        },
        correctAnswer: "B"
    },
    {   question: "What is a single digit number with no value?",
        choices: {
            A: "one",
            B: "zero",
            C: "ten"
        },
        correctAnswer: "B"
    },
    {   question: "What gets smaller every time it takes a bath?",
        choices: {
            A: "soap",
            B: "dishes",
            C: "sponge"
        },
        correctAnswer: "C"
    },
    {   question: "What 5-letter word typed in all caps can be read the same upside-down?",
        choices: {
            A: "swims",
            B: "plays",
            C: "moons"
        },
        correctAnswer: "A"
    },
    {   question: "What word contains 26 letters but only has 3 syllables?",
        choices: {
            A: "astronaut",
            B: "alphabet",
            C: "natural"
        },
        correctAnswer: "B"
    },
    {   question: "What do you buy when it's alive and dig up when it's dead?",
        choices: {
            A: "fish",
            B: "beef",
            C: "plant"
        },
        correctAnswer: "C"
    },
    {   question: "What do you lose the moment you share it?",
        choices: {
            A: "secret",
            B: "money",
            C: "trust"
        },
        correctAnswer: "A"
    },
    {   question: "What's bought by the yard; worn by the foot?",
        choices: {
            A: "sock",
            B: "shoe",
            C: "carpet"
        },
        correctAnswer: "C"
    },
    {   question: "I have a head like a cat; I feel like a cat but I am not a cat. Who am I??",
        choices: {
            A: "kitten",
            B: "dog",
            C: "wolf"
        },
        correctAnswer: "A"
    },
    {   question: "What common English verb becomes its own past tense by rearranging its letters?",
        choices: {
            A: "take",
            B: "eat",
            C: "tell"
        },
        correctAnswer: "B"
    },
    {   question: "I drive men mad; I am easily beaten but I'm never free. Who am I?",
        choices: {
            A: "ground",
            B: "money",
            C: "gold"
        },
        correctAnswer: "C"
    },
    {   question: "I am lighter than what I am made of; more of me is hidden than is seen. Who am I?",
        choices: {
            A: "water",
            B: "iceberg",
            C: "ship"
        },
        correctAnswer: "B"
    },
    {   question: "Walk on the alive; they don't even mumble. Walk on the dead; they grumble. What are they?",
        choices: {
            A: "soles",
            B: "leaves",
            C: "water"
        },
        correctAnswer: "B"
    },
    {   question: "I go around in circles, but always straight ahead. I never complain no matter where I'm led. Who am I?",
        choices: {
            A: "wheel",
            B: "cart",
            C: "clock"
        },
        correctAnswer: "A"
    },
    {   question: "What has 6 faces but does not wear make-up, and 21 eyes but cannot see?",
        choices: {
            A: "moon",
            B: "dice",
            C: "card"
        },
        correctAnswer: "B"
    },
    {   question: "Break me, I'll cage you; obey me, I'll save you. Who am I?",
        choices: {
            A: "case",
            B: "law",
            C: "glass"
        },
        correctAnswer: "B"
    },
    {   question: "What parts of roads do ghosts like to travel?",
        choices: {
            A: "country-roads",
            B: "cross-roads",
            C: "dead-ends"
        },
        correctAnswer: "C"
    },
    {   question: "What runs around the whole yard without moving?",
        choices: {
            A: "dogs",
            B: "fence",
            C: "house"
        },
        correctAnswer: "B"
    },
    {   question: "What loses its head in the morning and gets it back at night?",
        choices: {
            A: "pillow",
            B: "bed",
            C: "sofa"
        },
        correctAnswer: "A"
    },
    {   question: "You answer, but I never ask a question?",
        choices: {
            A: "exam",
            B: "story",
            C: "telephone"
        },
        correctAnswer: "C"
    },
    {   question: "I have 2 arms but no fingers; I have 2 feet but cannot run. While I carry well, I carry best with my feet off the ground. Who am I?",
        choices: {
            A: "wheelbarrow",
            B: "car",
            C: "truck"
        },
        correctAnswer: "A"
    },
    {   question: "What is Medusa's favorite cheese?",
        choices: {
            A: "parmesan",
            B: "gorgonzola",
            C: "blue"
        },
        correctAnswer: "B"
    },
    {   question: "What do you call a room without windows?",
        choices: {
            A: "mushroom",
            B: "egg",
            C: "room"
        },
        correctAnswer: "A"
    },
    {   question: "There is nothing outside, nothing inside; it's as light as a feather yet 10 people cannot lift it...?",
        choices: {
            A: "bubble",
            B: "feather",
            C: "drop of water"
        },
        correctAnswer: "A"
    },
    {   question: "I can shave 25 times a day but I still have a beard. Who am I?",
        choices: {
            A: "cook",
            B: "barber",
            C: "mystery"
        },
        correctAnswer: "B"
    },
    {   question: "I can run but not walk. The thought is not too far behind me. Who am I?",
        choices: {
            A: "nose",
            B: "legs",
            C: "marathon"
        },
        correctAnswer: "A"
    },
    {   question: "Washing makes it dirtier and dirtier...",
        choices: {
            A: "towel",
            B: "water",
            C: "soap"
        },
        correctAnswer: "B"
    },
    {   question: "What is the difference between an elephant and a plum?",
        choices: {
            A: "color",
            B: "taste",
            C: "smell"
        },
        correctAnswer: "A"
    },
    {   question: "What is never thirsty but always hungry?",
        choices: {
            A: "water",
            B: "stove",
            C: "fire"
        },
        correctAnswer: "C"
    },
    {   question: "Mr. Blue lives in the Blue house. Mr. Yellow lives in the Yellow house and Mr. Black lives in the Black house. Who lives in the White house?",
        choices: {
            A: "Mr. White",
            B: "Mr. President",
            C: "Mr. Red"
        },
        correctAnswer: "B"
    },
    {   question: "If an electric train is going North, where is the smoke going?",
        choices: {
            A: "nowhere",
            B: "south",
            C: "north"
        },
        correctAnswer: "A"
    },
    {   question: "What does a salad wear?",
        choices: {
            A: "mustard",
            B: "tomato",
            C: "dressing"
        },
        correctAnswer: "C"
    },
    {   question: "You bought me for dinner but you never eat me...?",
        choices: {
            A: "food",
            B: "plate",
            C: "salad"
        },
        correctAnswer: "B"
    },
    {   question: "What is brown and sticky?",
        choices: {
            A: "ground",
            B: "stick",
            C: "tree"
        },
        correctAnswer: "B"
    },
    {   question: "What we caught, we threw away. We kept what we didn't catch. What was it that we kept?",
        choices: {
            A: "worms",
            B: "lice",
            C: "spiders"
        },
        correctAnswer: "B"
    },
    {   question: "What breaks but never falls?",
        choices: {
            A: "ground",
            B: "glass",
            C: "day"
        },
        correctAnswer: "C"
    },
    {   question: "First you eat me, then you get eaten. What am I?",
        choices: {
            A: "fish-hook",
            B: "fish",
            C: "food"
        },
        correctAnswer: "A"
    },
    {   question: "I have a neck with no head and 2 arms with no hands. What am I?",
        choices: {
            A: "tree",
            B: "mushroom",
            C: "shirt"
        },
        correctAnswer: "C"
    },
    {   question: "My thunder comes before the lightning; my lightning comes before the clouds; my rain dries all the land it touches. What am I?",
        choices: {
            A: "rain",
            B: "volcano",
            C: "clouds"
        },
        correctAnswer: "B"
    },
    {   question: "If 11+2=1, what is 9+5?",
        choices: {
            A: "14",
            B: "13",
            C: "2"
        },
        correctAnswer: "C"
    },
    {   question: "Which key is hardest to turn?",
        choices: {
            A: "donkey",
            B: "door-key",
            C: "wooden key"
        },
        correctAnswer: "A"
    },
    {   question: "Where do fishes keep their money?",
        choices: {
            A: "ocean",
            B: "riverbank",
            C: "sea"
        },
        correctAnswer: "B"
    },
    {   question: "What goes Z to A in seconds?",
        choices: {
            A: "letters",
            B: "alphabet",
            C: "zebra"
        },
        correctAnswer: "C"
    },
    {   question: "What seed has one letter?",
        choices: {
            A: "pea",
            B: "mustard",
            C: "apple"
        },
        correctAnswer: "A"
    },
    {   question: "After zooming and zapping, I bring you dazzling beauty when I emerge. Who am I?",
        choices: {
            A: "lightning",
            B: "rainbow",
            C: "thunder"
        },
        correctAnswer: "B"
    },
    {   question: "I have wings; I am able to fly yet I am not a bird. Who am I?",
        choices: {
            A: "plane",
            B: "bird",
            C: "butterfly"
        },
        correctAnswer: "A"
    },
    {   question: "I am a fruit, I am a bird and also a person. What am I?",
        choices: {
            A: "kiwi",
            B: "orange",
            C: "pineapple"
        },
        correctAnswer: "A"
    },
    {   question: "What superhero is terrible at their job because they always get lost?",
        choices: {
            A: "superman",
            B: "wander-woman",
            C: "spiderman"
        },
        correctAnswer: "B"
    },
    {   question: "What is yellow and slippery when you fall on it?",
        choices: {
            A: "ground",
            B: "watermelon",
            C: "banana"
        },
        correctAnswer: "C"
    },
    {   question: "What is always late and never present now?",
        choices: {
            A: "yesterday",
            B: "now",
            C: "later"
        },
        correctAnswer: "C"
    },
    {   question: "What can be big, white, dirty and wicked?",
        choices: {
            A: "wolf",
            B: "lie",
            C: "snow"
        },
        correctAnswer: "B"
    },
    {   question: "What is often on the ground getting stepped on but you don't have to wash it because it never gets dirty?",
        choices: {
            A: "shadow",
            B: "carpet",
            C: "ground"
        },
        correctAnswer: "A"
    },
    {   question: "If a car-key would open a car and a house-key would open a house, what would open a banana?",
        choices: {
            A: "banana-key",
            B: "monkey",
            C: "treehouse-key"
        },
        correctAnswer: "B"
    },
    {   question: "I come in different colors; sometimes I'm hot, other times I'm sweet. I'm sorry I can't answer you because I have a bell that can't ring. What am I?",
        choices: {
            A: "bell",
            B: "jalapeno pepper",
            C: "bell-pepper"
        },
        correctAnswer: "C"
    },
    {   question: "What do geese, waterfowl and ducks have for breakfast?",
        choices: {
            A: "oatmeal",
            B: "pancakes",
            C: "quacker-oats"
        },
        correctAnswer: "C"
    },
    {   question: "What do cats, dogs, birds, fish and turtles have in common?",
        choices: {
            A: "funny",
            B: "the letter 's'",
            C: "cute"
        },
        correctAnswer: "B"
    },
    {   question: "What Hhas feet on the inside but not on the outside?",
        choices: {
            A: "shoes",
            B: "feet",
            C: "shorts"
        },
        correctAnswer: "A"
    },
    {   question: "What can you eat, play with, watch with and listen to music with?",
        choices: {
            A: "apple",
            B: "orange",
            C: "samsung"
        },
        correctAnswer: "A"
    },
    {   question: "Which part of the day is the easiest to break?",
        choices: {
            A: "day",
            B: "breakfast",
            C: "lunch"
        },
        correctAnswer: "B"
    },
    {   question: "I can run fast and slow, I can be high or low, I can slip though almost anything and I'm needed by both beggars and kings. Who am I?",
        choices: {
            A: "water",
            B: "river",
            C: "food"
        },
        correctAnswer: "A"
    },
    {   question: "What 5-letter word has a thousand letters in it?",
        choices: {
            A: "encyclopedia",
            B: "Bible",
            C: "mail"
        },
        correctAnswer: "B"
    },
    {   question: "You keep me close to you and you save me no matter how small, big or dirty I get. Who am I?",
        choices: {
            A: "ice-cream",
            B: "money",
            C: "chips"
        },
        correctAnswer: "B"
    },
    {   question: "You'll find me in a soup, in a burger, in a pizza; I am green when raw and red when ripe and ready to become a condiment. Who am I?",
        choices: {
            A: "tomato",
            B: "watermelon",
            C: "lettuce"
        },
        correctAnswer: "A"
    },
    {   question: "If you can find a turtle in an aquarium, dogs in pounds and birds in nests, where can you find fish?",
        choices: {
            A: "pond",
            B: "swamp",
            C: "school"
        },
        correctAnswer: "C"
    },
    {   question: "I go up and down, and I am blazing hot. If you look right at me, you'll wish you had not. Who am I?",
        choices: {
            A: "sun",
            B: "fire",
            C: "moon"
        },
        correctAnswer: "A"
    },
    {   question: "I can be white, dark, sweet or bitter. You may see me in a cookie or cupcake. Who am I?",
        choices: {
            A: "chocolate",
            B: "dough",
            C: "icing"
        },
        correctAnswer: "A"
    },
    {   question: "You can slice me, dice me, chop me, cut me, cook me; I might make you cry. Who am I?",
        choices: {
            A: "tomato",
            B: "steak",
            C: "onion"
        },
        correctAnswer: "C"
    },
    {   question: "I can be tiny or big on a ceiling but I shine at night to illuminate people's homes. Who am I?",
        choices: {
            A: "star",
            B: "lightbulb",
            C: "torch"
        },
        correctAnswer: "B"
    },
    {   question: "Love needs sunglasses and a cane because love is...?",
        choices: {
            A: "deaf",
            B: "mute",
            C: "blind"
        },
        correctAnswer: "C"
    },
    {   question: "I am known to be shorter than my pals in the calendar. Who am I?",
        choices: {
            A: "February",
            B: "March",
            C: "October"
        },
        correctAnswer: "A"
    },
    {   question: "I am the curviest of all numbers; I invented the hourglass figure. Who am I?",
        choices: {
            A: "zero",
            B: "eight",
            C: "seven"
        },
        correctAnswer: "B"
    },
    {   question: "What is sometimes long and other times short, thin, thick or sparse?",
        choices: {
            A: "laces",
            B: "hair",
            C: "sleeves"
        },
        correctAnswer: "B"
    },
    {   question: "The snowman needs me for him to look complete; I'm also a rabbit's favorite meal. Who am I?",
        choices: {
            A: "banana",
            B: "steak",
            C: "carrot"
        },
        correctAnswer: "C"
    },
    {   question: "What did the Zodiac get when the doctor tested him?",
        choices: {
            A: "fever",
            B: "cold",
            C: "cancer"
        },
        correctAnswer: "C"
    },
    {   question: "People drink me in the morning when they wake up; I come from a bean. Who am I?",
        choices: {
            A: "porridge",
            B: "coffee",
            C: "tea"
        },
        correctAnswer: "B"
    },
    {   question: "What kind of music do bunnies like?",
        choices: {
            A: "Hiphop",
            B: "RnB",
            C: "Lofi"
        },
        correctAnswer: "A"
    },
    {   question: "What is the smartest insect who also has very good vocabulary?",
        choices: {
            A: "mosquito",
            B: "spelling-bee",
            C: "cockroach"
        },
        correctAnswer: "B"
    },
    {   question: "My face is surrounded by hair; I am fierce and ferocious, known to be the ruler of the jungle. Who am I?",
        choices: {
            A: "lion",
            B: "leopard",
            C: "hyena"
        },
        correctAnswer: "A"
    },
    {   question: "There are 26 of us; you need us to speak English. Who are we?",
        choices: {
            A: "letters",
            B: "numbers",
            C: "alphabet"
        },
        correctAnswer: "C"
    },
    {   question: "What number is always single?",
        choices: {
            A: "one",
            B: "zero",
            C: "ten"
        },
        correctAnswer: "A"
    },
    {   question: "I am a marshmallow in the sky...",
        choices: {
            A: "rain",
            B: "cloud",
            C: "sky"
        },
        correctAnswer: "B"
    },
    {   question: "What planet will have a fancy engagement party because it has the most rings?",
        choices: {
            A: "Jupiter",
            B: "Saturn",
            C: "Neptune"
        },
        correctAnswer: "B"
    },
    {   question: "Monkeys love me; people eat me; you'll find me on top of icecream too! Who am I?",
        choices: {
            A: "apple",
            B: "cherry",
            C: "banana"
        },
        correctAnswer: "C"
    },
    {   question: "Tie me and take me out. Untie me and put me back in. Who am I?",
        choices: {
            A: "shoe",
            B: "sock",
            C: "sweater"
        },
        correctAnswer: "A"
    },
    {   question: "David's father has 3 sons; Snap, Crackle and...",
        choices: {
            A: "Pop",
            B: "cereal",
            C: "David"
        },
        correctAnswer: "C"
    },
    {   question: "What 5-letter word stays the same when you take away the first, third and last letter?",
        choices: {
            A: "empty",
            B: "energy",
            C: "eight"
        },
        correctAnswer: "A"
    },
    {   question: "We hurt you without touching you. We spell poison and lies. Other times we mean the truth. Who are we?",
        choices: {
            A: "lies",
            B: "words",
            C: "truth"
        },
        correctAnswer: "B"
    },
    {   question: "Which English word is the odd one out; shun, ton, evil, mood, letter, bad, snap?",
        choices: {
            A: "ton",
            B: "mood",
            C: "letter"
        },
        correctAnswer: "C"
    },
    {   question: "Which English word has 3 consecutive double letters?",
        choices: {
            A: "television",
            B: "bookkeeper",
            C: "emergency"
        },
        correctAnswer: "B"
    },
    {   question: "I am a marshmallow in the sky?",
        choices: {
            A: "rain",
            B: "cloud",
            C: "sky"
        },
        correctAnswer: "B"
    },
    {   question: "Soldiers line up, spaced with pride, two long rows, lined side-by-side. One sole unit can decide whether to unite. Who am I?",
        choices: {
            A: "zip",
            B: "shoe",
            C: "tie"
        },
        correctAnswer: "A"
    },
    {   question: "You watch me day-in, day-out hoping for some interesting gossip?",
        choices: {
            A: "neighbor",
            B: "television",
            C: "radio"
        },
        correctAnswer: "B"
    },
    {   question: "The shorter I am, the bigger I am?",
        choices: {
            A: "temper",
            B: "pencil",
            C: "pen"
        },
        correctAnswer: "A"
    },
    {   question: "What has a foot but no leg?",
        choices: {
            A: "eraser",
            B: "wall",
            C: "ruler"
        },
        correctAnswer: "C"
    },
    {   question: "What stinks when living but smells good when dead?",
        choices: {
            A: "bacon",
            B: "beef",
            C: "chicken"
        },
        correctAnswer: "A"
    },
    {   question: "What has a big mouth but never speaks?",
        choices: {
            A: "bottle",
            B: "jar",
            C: "cup"
        },
        correctAnswer: "B"
    },
    {   question: "A virgin gave birth to a child and threw away the blanket...",
        choices: {
            A: "apple",
            B: "banana",
            C: "berry"
        },
        correctAnswer: "B"
    },
    {   question: "There is a creature, whose body is hard; it does not wish to eat unless you strike its head.",
        choices: {
            A: "chisel",
            B: "nail",
            C: "hammer"
        },
        correctAnswer: "A"
    },
    {   question: "What do you have when you're sitting down, that you don't have when you're standing?",
        choices: {
            A: "legs",
            B: "shoes",
            C: "seat"
        },
        correctAnswer: "C"
    },
    {   question: "Born of sorrow; grows with age. You need a lot to be sage.",
        choices: {
            A: "folly",
            B: "wisdom",
            C: "time"
        },
        correctAnswer: "B"
    },
    {   question: "Some are quick to take it; others ust be coaxed. Those who choose to take it, gain and lose the most.",
        choices: {
            A: "cake",
            B: "money",
            C: "risk"
        },
        correctAnswer: "C"
    },
    {   question: "I go in dry and come out wet. What I leave behind, you can drink and relax.",
        choices: {
            A: "towel",
            B: "teabag",
            C: "water"
        },
        correctAnswer: "B"
    },
    {   question: "When the creeper passes, all the grass kneels.",
        choices: {
            A: "lawn mower",
            B: "scissors",
            C: "knife"
        },
        correctAnswer: "A"
    },
    {   question: "You can only have it once you've given it.",
        choices: {
            A: "respect",
            B: "money",
            C: "attention"
        },
        correctAnswer: "A"
    },
    {   question: "I have a tongue but cannot taste; I have a soul but cannot feel. Who am I?",
        choices: {
            A: "T-shirt",
            B: "shoe",
            C: "sock"
        },
        correctAnswer: "B"
    },
    {   question: "What is put on a table, cut but never eaten?",
        choices: {
            A: "kale",
            B: "carrots",
            C: "cards"
        },
        correctAnswer: "C"
    },
    {   question: "I ate one but threw away two.",
        choices: {
            A: "oyster",
            B: "fish",
            C: "cat"
        },
        correctAnswer: "A"
    },
    {   question: "A deep well full of knives.",
        choices: {
            A: "mouth",
            B: "cave",
            C: "borehole"
        },
        correctAnswer: "A"
    },
    {   question: "Strangest creature you'll ever find. Two eyes in-front and many more behind.",
        choices: {
            A: "kangaroo",
            B: "peacock",
            C: "elephant"
        },
        correctAnswer: "B"
    },
    {   question: "I cover what is real and hide what is true; sometimes I bring the courage in you.",
        choices: {
            A: "words",
            B: "food",
            C: "truth"
        },
        correctAnswer: "A"
    },
    {   question: "What flies around all day but never goes anywhere?",
        choices: {
            A: "kite",
            B: "clouds",
            C: "flag"
        },
        correctAnswer: "C"
    },
    {   question: "What is given but kept by the giver?",
        choices: {
            A: "time",
            B: "birth",
            C: "money"
        },
        correctAnswer: "B"
    },
    {   question: "What has roots that nobody sees, is taller than trees; up, up it goes?",
        choices: {
            A: "staircase",
            B: "mountain",
            C: "trees"
        },
        correctAnswer: "B"
    },
    {   question: "Sometimes I'm light, sometimes I'm dark. What am I?",
        choices: {
            A: "chocolate",
            B: "stars",
            C: "moon"
        },
        correctAnswer: "A"
    },
    {   question: "I have no life but I can die.",
        choices: {
            A: "candle",
            B: "battery",
            C: "car"
        },
        correctAnswer: "B"
    },
    {   question: "I have 100 legs but I cannot stand, a long neck but no head; I am the maid's companion.",
        choices: {
            A: "brush",
            B: "bucket",
            C: "broom"
        },
        correctAnswer: "C"
    },
    {   question: "What makes tears without sorrow annd takes its journey to heaven?",
        choices: {
            A: "smoke",
            B: "clouds",
            C: "eyes"
        },
        correctAnswer: "A"
    },
    {   question: "Born at the same time as the world, destined to live as long as the world, yet never 5 weeks old.",
        choices: {
            A: "moon",
            B: "sun",
            C: "stars"
        },
        correctAnswer: "A"
    },
    {   question: "I cannot be bought or sold, even if sometimes I'm made of gold.",
        choices: {
            A: "ring",
            B: "necklace",
            C: "heart"
        },
        correctAnswer: "C"
    },
    {   question: "As your ideas grow, I shrink.",
        choices: {
            A: "pen",
            B: "pencil",
            C: "book"
        },
        correctAnswer: "B"
    },
    {   question: "I can honk without using a horn.",
        choices: {
            A: "truck",
            B: "goose",
            C: "train"
        },
        correctAnswer: "B"
    },
    {   question: "I have 2 hands but can't clap.",
        choices: {
            A: "clock",
            B: "table",
            C: "pan"
        },
        correctAnswer: "A"
    },
    {   question: "A precious fluid, thicker than water.",
        choices: {
            A: "milkshake",
            B: "yoghurt",
            C: "blood"
        },
        correctAnswer: "C"
    },
    {   question: "Inside the great, blue castle, lives a shy, young maiden. She blushes in the morning and doesn't come out at night.",
        choices: {
            A: "Jasmine",
            B: "sun",
            C: "Cinderella"
        },
        correctAnswer: "B"
    },
    {   question: "I am weightless but you can see me. Put me in a bucket and I'll make it lighter. What am I?",
        choices: {
            A: "air",
            B: "breath",
            C: "hole"
        },
        correctAnswer: "C"
    },
    {   question: "It speaks without a tongue and listens without ears.",
        choices: {
            A: "mime",
            B: "phone",
            C: "river"
        },
        correctAnswer: "B"
    },
    {   question: "I cannot be captured or held; only heard.",
        choices: {
            A: "voice",
            B: "wind",
            C: "air"
        },
        correctAnswer: "A"
    },
    {   question: "Has no feet but travels far; is literate but not a scholar; Has no mouth but clearly speaks.",
        choices: {
            A: "pilot",
            B: "letter",
            C: "stream"
        },
        correctAnswer: "B"
    },
    {   question: "What is between heaven and earth?",
        choices: {
            A: "and",
            B: "earth",
            C: "ocean"
        },
        correctAnswer: "A"
    },
    {   question: "Has feathers but can't fly; rests on legs but can't walk.",
        choices: {
            A: "mattress",
            B: "bird",
            C: "pillow"
        },
        correctAnswer: "C"
    },
    {   question: "Locked up inside you, yet they can steal it from you.",
        choices: {
            A: "heart",
            B: "secret",
            C: "light"
        },
        correctAnswer: "A"
    },
    {   question: "What is round on both ends and Hi in the middle?",
        choices: {
            A: "Singapore",
            B: "China",
            C: "Ohio"
        },
        correctAnswer: "C"
    },
    {   question: "If you agree, give me one of these.",
        choices: {
            A: "time",
            B: "nod",
            C: "money"
        },
        correctAnswer: "B"
    },
    {   question: "The more you look at it, the less you see.",
        choices: {
            A: "air",
            B: "sun",
            C: "food"
        },
        correctAnswer: "B"
    },
    {   question: "What fruit is of great use to loved ones?",
        choices: {
            A: "date",
            B: "cherry",
            C: "banana"
        },
        correctAnswer: "A"
    },
    {   question: "Many foods can make me strong; give me water and I won't last long.",
        choices: {
            A: "paper",
            B: "fire",
            C: "leaves"
        },
        correctAnswer: "B"
    },
    {   question: "What has its teeth on your head but doesn't bite?",
        choices: {
            A: "brush",
            B: "needle",
            C: "comb"
        },
        correctAnswer: "C"
    },
    {   question: "I pass before the sun yet make no shadow.",
        choices: {
            A: "wind",
            B: "clouds",
            C: "rain"
        },
        correctAnswer: "A"
    },
    {   question: "It is not an enemy, yet we still beat it.",
        choices: {
            A: "guitar",
            B: "drum",
            C: "piano"
        },
        correctAnswer: "B"
    },
    {   question: "When we stand up, it lies flat. When we lie back, it stands up.",
        choices: {
            A: "foot",
            B: "toes",
            C: "legs"
        },
        correctAnswer: "A"
    },
    {   question: "What points the way without a hand?",
        choices: {
            A: "glove",
            B: "finger",
            C: "compass"
        },
        correctAnswer: "C"
    },
    {   question: "Everyone has it and no one can lose it. What is it?",
        choices: {
            A: "time",
            B: "shadow",
            C: "money"
        },
        correctAnswer: "B"
    },
    {   question: "What divides by uniting and dividing?",
        choices: {
            A: "paper",
            B: "scissors",
            C: "rock"
        },
        correctAnswer: "B"
    },
    {   question: "What food has no beginning, end or middle?",
        choices: {
            A: "donut",
            B: "burger",
            C: "pizza"
        },
        correctAnswer: "A"
    },
    {   question: "What has one eye and is slim?",
        choices: {
            A: "ruler",
            B: "snake",
            C: "needle"
        },
        correctAnswer: "C"
    },
    {   question: "It is something you saw that you'll never see again.",
        choices: {
            A: "today",
            B: "yesterday",
            C: "tomorrow"
        },
        correctAnswer: "B"
    },
    {   question: "The older they are, the less wrinkles they have.",
        choices: {
            A: "tyres",
            B: "candles",
            C: "cars"
        },
        correctAnswer: "A"
    },
    {   question: "Guided, I am scraping along, leaving behind white dust against that which I'm scraping.",
        choices: {
            A: "chalk",
            B: "pen",
            C: "pencil"
        },
        correctAnswer: "A"
    },
    {   question: "What has black spots and a white face; is fat, not thin, helps you win, but stumbles all over the place?",
        choices: {
            A: "beer",
            B: "cards",
            C: "dice"
        },
        correctAnswer: "C"
    },
    {   question: "What type of dress can never be worn?",
        choices: {
            A: "mermaid",
            B: "address",
            C: "sundress"
        },
        correctAnswer: "B"
    },
    {   question: "What time is spelled the same forwards and backwards?",
        choices: {
            A: "noon",
            B: "morning",
            C: "night"
        },
        correctAnswer: "A"
    },
    {   question: "I have a pet; his body is full of coins.",
        choices: {
            A: "chinchilla",
            B: "piggybank",
            C: "dog"
        },
        correctAnswer: "B"
    },
    {   question: "What starts with letter T, is filled with T and ends with letter T?",
        choices: {
            A: "toilet",
            B: "teapot",
            C: "teacup"
        },
        correctAnswer: "B"
    },
    {   question: "What has 4 eyes but can't see?",
        choices: {
            A: "scorpion",
            B: "spider",
            C: "Mississippi"
        },
        correctAnswer: "C"
    },
    {   question: "I have 4 legs, a back but no head.",
        choices: {
            A: "chair",
            B: "table",
            C: "bed"
        },
        correctAnswer: "A"
    },
    {   question: "If you have me, you want to tell me; if you tell me, you don't have me.",
        choices: {
            A: "story",
            B: "secret",
            C: "lie"
        },
        correctAnswer: "B"
    },
    {   question: "What kind of cup doesn't hold water?",
        choices: {
            A: "teacup",
            B: "plastic cup",
            C: "cupcake"
        },
        correctAnswer: "C"
    },
    {   question: "What always goes to bed with it's shoes on?",
        choices: {
            A: "camel",
            B: "horse",
            C: "donkey"
        },
        correctAnswer: "B"
    },
    {   question: "I have 8 to spare and I'm covered in hair.",
        choices: {
            A: "squirrel",
            B: "dog",
            C: "cat"
        },
        correctAnswer: "C"
    },
    {   question: "What type of house weighs the least?",
        choices: {
            A: "lighthouse",
            B: "paperhouse",
            C: "treehouse"
        },
        correctAnswer: "A"
    },
    {   question: "What kind of room has no doors or windows?",
        choices: {
            A: "courtroom",
            B: "mushroom",
            C: "playroom"
        },
        correctAnswer: "B"
    },
    {   question: "What kind of room doesn't have physical walls?",
        choices: {
            A: "mushroom",
            B: "playroom",
            C: "chatroom"
        },
        correctAnswer: "C"
    },
    {   question: "What is used by people, tossed by trees; everywhere, but unseen?",
        choices: {
            A: "air",
            B: "water",
            C: "food"
        },
        correctAnswer: "A"
    },
    {   question: "I eat, I live; I breathe, I live; I drink, I die. What am I?",
        choices: {
            A: "poison",
            B: "fire",
            C: "wind"
        },
        correctAnswer: "B"
    },
    {   question: "You use me when you jump off a bridge for fun.",
        choices: {
            A: "bungee",
            B: "string",
            C: "tie"
        },
        correctAnswer: "A"
    },
    {   question: "The line a runner strives to reach.",
        choices: {
            A: "queue",
            B: "rope",
            C: "finish"
        },
        correctAnswer: "C"
    },
    {   question: "What insect does a blacksmith manufacture?",
        choices: {
            A: "mosquito",
            B: "firefly",
            C: "ant"
        },
        correctAnswer: "B"
    },
    {   question: "If you held me for too long, you would die.",
        choices: {
            A: "water",
            B: "laughter",
            C: "breath"
        },
        correctAnswer: "C"
    },
    {   question: "Something we eat and misspell as meet.",
        choices: {
            A: "meat",
            B: "beef",
            C: "pizza"
        },
        correctAnswer: "A"
    },
    {   question: "I can be used to type and point. But don't forget, you can count on me.",
        choices: {
            A: "fingers",
            B: "letters",
            C: "numbers"
        },
        correctAnswer: "A"
    },
    {   question: "A toy that requires a string and a breezy day.",
        choices: {
            A: "bike",
            B: "flag",
            C: "kite"
        },
        correctAnswer: "C"
    },
    {   question: "It is the child of a circle and a rectangle.",
        choices: {
            A: "oval",
            B: "triangle",
            C: "square"
        },
        correctAnswer: "A"
    },
    {   question: "What has 100 limbs, sometimes leaves but cannot walk?",
        choices: {
            A: "tree",
            B: "truck",
            C: "millipede"
        },
        correctAnswer: "A"
    },
    {   question: "When life gives you this, make a refreshing beverage.",
        choices: {
            A: "coffee",
            B: "lemons",
            C: "chocolate"
        },
        correctAnswer: "B"
    },
    {   question: "What is green, has 4 legs, no tail and loves water?",
        choices: {
            A: "frog",
            B: "hippo",
            C: "crocodile"
        },
        correctAnswer: "A"
    },
    {   question: "What follows a dog wherever it goes?",
        choices: {
            A: "leash",
            B: "cat",
            C: "tail"
        },
        correctAnswer: "C"
    },
    {   question: "A king without a crown...",
        choices: {
            A: "giraffe",
            B: "lion",
            C: "panda"
        },
        correctAnswer: "B"
    },
    {   question: "Teddy bears are never hungry because they are always...?",
        choices: {
            A: "happy",
            B: "stuffed",
            C: "cute"
        },
        correctAnswer: "B"
    },
    {   question: "What is found over your head but under your hat?",
        choices: {
            A: "hair",
            B: "brain",
            C: "crown"
        },
        correctAnswer: "A"
    },
    {   question: "Consuming food would be extremely hard without these chompers.",
        choices: {
            A: "spoon",
            B: "fork",
            C: "teeth"
        },
        correctAnswer: "C"
    },
    {   question: "I fly away once you let me loose; People around you may slowly move away once they sense my presence. What am I?",
        choices: {
            A: "fart",
            B: "air",
            C: "dove"
        },
        correctAnswer: "A"
    },
    {   question: "Which is the oldest tree?",
        choices: {
            A: "trunk",
            B: "sequoia",
            C: "Elder"
        },
        correctAnswer: "C"
    },
    {   question: "What lives where it cannot breathe and has a hole in its back?",
        choices: {
            A: "shark",
            B: "whale",
            C: "turtle"
        },
        correctAnswer: "B"
    },
    {   question: "You see me a lot, especially at night; I protect something special. Many shut me in fright.",
        choices: {
            A: "door",
            B: "eyelids",
            C: "prison"
        },
        correctAnswer: "B"
    },
    {   question: "I come out when you're very sad.",
        choices: {
            A: "tears",
            B: "noise",
            C: "water"
        },
        correctAnswer: "A"
    },
    {   question: "Don't do this in the shallow end.",
        choices: {
            A: "eat",
            B: "swim",
            C: "dive"
        },
        correctAnswer: "C"
    },
    {   question: "I am the home for feathery creatures.",
        choices: {
            A: "nest",
            B: "hotel",
            C: "cave"
        },
        correctAnswer: "A"
    },
    {   question: "My flavor ranges from strawberry to toe.",
        choices: {
            A: "lemon",
            B: "jam",
            C: "honey"
        },
        correctAnswer: "B"
    },
    {   question: "There's one in every deck of cards in a famous movie.",
        choices: {
            A: "king",
            B: "queen",
            C: "joker"
        },
        correctAnswer: "C"
    },
    {   question: "Don't forget to do this before blowing candles.",
        choices: {
            A: "sing",
            B: "eat",
            C: "wish"
        },
        correctAnswer: "C"
    },
    {   question: "What is the ending of all that begins?",
        choices: {
            A: "death",
            B: "life",
            C: "oceans"
        },
        correctAnswer: "A"
    },
    {   question: "These are needed to finish a test.",
        choices: {
            A: "papers",
            B: "pens",
            C: "answers"
        },
        correctAnswer: "C"
    },
    {   question: "I'm afraid of doing scary activities.",
        choices: {
            A: "chicken",
            B: "pigeon",
            C: "dog"
        },
        correctAnswer: "A"
    },
    {   question: "Cows do this to salt and humans do this to icecream.",
        choices: {
            A: "eat",
            B: "lick",
            C: "drink"
        },
        correctAnswer: "B"
    },
    {   question: "This noble creature that lives water has the embarassing inability to get up once it's flipped on its back.",
        choices: {
            A: "turtle",
            B: "fish",
            C: "cat"
        },
        correctAnswer: "A"
    },
    {   question: "It's real until the trick is revealed.",
        choices: {
            A: "time",
            B: "lies",
            C: "magic"
        },
        correctAnswer: "C"
    },
    {   question: "What is orange and looks like parrot?",
        choices: {
            A: "icecream",
            B: "tomato",
            C: "carrot"
        },
        correctAnswer: "C"
    },
    {   question: "I will disappear every time you say my name.",
        choices: {
            A: "secret",
            B: "trick",
            C: "story"
        },
        correctAnswer: "A"
    },
    {   question: "What has 100 limbs, sometimes leaves but cannot walk?",
        choices: {
            A: "tree",
            B: "truck",
            C: "millipede"
        },
        correctAnswer: "A"
    },
    {   question: "Do this to your gifts to make them festive.",
        choices: {
            A: "throw",
            B: "break",
            C: "wrap"
        },
        correctAnswer: "C"
    },
    {   question: "An image frozen in time.",
        choices: {
            A: "camera",
            B: "photo",
            C: "house"
        },
        correctAnswer: "B"
    },
    {   question: "Both boats with holes and dirty dishes have this in common.",
        choices: {
            A: "sink",
            B: "ride",
            C: "drive"
        },
        correctAnswer: "A"
    },
    {   question: "I destroy your home from the inside-out.",
        choices: {
            A: "termite",
            B: "cockroach",
            C: "rat"
        },
        correctAnswer: "A"
    },
    {   question: "What leaps 1 time out of 4?",
        choices: {
            A: "cricket",
            B: "frog",
            C: "year"
        },
        correctAnswer: "C"
    },
    {   question: "Boxers do this for a living and kids do this in the backseat for free.",
        choices: {
            A: "cry",
            B: "fight",
            C: "eat"
        },
        correctAnswer: "B"
    },
    {   question: "I am pinched by grandmas all the time. What am I?",
        choices: {
            A: "sweater",
            B: "cheeks",
            C: "cake"
        },
        correctAnswer: "B"
    },
    {   question: "A farmer has 17 sheep and all but 9 run away. How many are left?",
        choices: {
            A: "8",
            B: "17",
            C: "9"
        },
        correctAnswer: "C"
    },
    {   question: "I am the only organ that named itself.",
        choices: {
            A: "brain",
            B: "kidney",
            C: "arm"
        },
        correctAnswer: "A"
    },
    {   question: "Canine children. What am I?",
        choices: {
            A: "puppy",
            B: "pony",
            C: "kitten"
        },
        correctAnswer: "A"
    },
    {   question: "The Titanic is still here. Who am I?",
        choices: {
            A: "Pacific",
            B: "Atlantic",
            C: "Red Sea"
        },
        correctAnswer: "B"
    },
    {   question: "I'm a green veggie that looks like a tiny tree.",
        choices: {
            A: "spinach",
            B: "kale",
            C: "broccoli"
        },
        correctAnswer: "C"
    },
    {   question: "It is something you make after you've weighed your options.",
        choices: {
            A: "noise",
            B: "decision",
            C: "sense"
        },
        correctAnswer: "B"
    },
    {   question: "Which fast vehicle is spelled the same forwards and backwards?",
        choices: {
            A: "Lambo",
            B: "ferrari",
            C: "racecar"
        },
        correctAnswer: "C"
    },
    {   question: "First they sailed the sea; now they surf the web.",
        choices: {
            A: "pirates",
            B: "sailors",
            C: "titans"
        },
        correctAnswer: "A"
    },
    {   question: "You are owed one of these when someone wrongs you.",
        choices: {
            A: "money",
            B: "apology",
            C: "attention"
        },
        correctAnswer: "B"
    },
    {   question: "Pirates put their booty in it.",
        choices: {
            A: "chest",
            B: "drawers",
            C: "pants"
        },
        correctAnswer: "A"
    },
    {   question: "What do you call a witch that lives in the sand?",
        choices: {
            A: "white-witch",
            B: "evil-witch",
            C: "sandwich"
        },
        correctAnswer: "C"
    },
    {   question: "One might hang a locket from this.",
        choices: {
            A: "necklace",
            B: "hanger",
            C: "rope"
        },
        correctAnswer: "A"
    },
    {   question: "Without me, you'll wander and get lost.",
        choices: {
            A: "moon",
            B: "sun",
            C: "light"
        },
        correctAnswer: "C"
    },
    {   question: "What makes apples fall from trees?",
        choices: {
            A: "birds",
            B: "bees",
            C: "gravity"
        },
        correctAnswer: "C"
    },
    {   question: "The Ninja Turtles call this place home.",
        choices: {
            A: "house",
            B: "couch",
            C: "sewers"
        },
        correctAnswer: "C"
    },
    {   question: "I make billions of dollars selling windows.",
        choices: {
            A: "Apple",
            B: "Microsoft",
            C: "Supermarket"
        },
        correctAnswer: "B"
    },
    {   question: "This type of corn swells up and bursts into a puff when heated.",
        choices: {
            A: "cornpuff",
            B: "popcorn",
            C: "corn"
        },
        correctAnswer: "B"
    },
    {   question: "A gentleman whose offspring has successfully produced offspring of their own.",
        choices: {
            A: "grandpa",
            B: "dad",
            C: "uncle"
        },
        correctAnswer: "A"
    },
    {   question: "We are all around, yet to us, you are half blind; sunlight makes us invisible and hard to find.",
        choices: {
            A: "moon",
            B: "sun",
            C: "stars"
        },
        correctAnswer: "C"
    },
    {   question: "Power enough to crush and sink ships; yet it must still fear the sun.",
        choices: {
            A: "pudding",
            B: "ice",
            C: "rocks"
        },
        correctAnswer: "B"
    },
    {   question: "What is the main ingredient in spaghetti and mac-and-cheese?",
        choices: {
            A: "pasta",
            B: "cheese",
            C: "sauce"
        },
        correctAnswer: "A"
    },
    {   question: "If someone calls you this, you might want to consider hot wax.",
        choices: {
            A: "pretty",
            B: "ugly",
            C: "hairy"
        },
        correctAnswer: "C"
    },
    {   question: "A building where people and stories are on stage.",
        choices: {
            A: "theatre",
            B: "library",
            C: "office"
        },
        correctAnswer: "A"
    },
    {   question: "I hop around and deliver eggs in Easter.",
        choices: {
            A: "hare",
            B: "bunny",
            C: "cat"
        },
        correctAnswer: "B"
    },
    {   question: "A popular after-life location to send evil people.",
        choices: {
            A: "Mc.Donalds",
            B: "hell",
            C: "heaven"
        },
        correctAnswer: "B"
    },
    {   question: "Kids love this bouncy sugary treat. It's like a colorful rubber that you can eat.",
        choices: {
            A: "cake",
            B: "eraser",
            C: "jello"
        },
        correctAnswer: "C"
    },
    {   question: "I'm an activity that dogs are very good at when a ball is thrown.",
        choices: {
            A: "jumping",
            B: "running",
            C: "fetch"
        },
        correctAnswer: "C"
    },
    {   question: "I help you carry your books to and from school.",
        choices: {
            A: "backpack",
            B: "crate",
            C: "bucket"
        },
        correctAnswer: "A"
    },
    {   question: "What is blind but cruel?",
        choices: {
            A: "water",
            B: "justice",
            C: "love"
        },
        correctAnswer: "B"
    },
    {   question: "A DJ does this to records. I do this to mosquito bites.",
        choices: {
            A: "lick",
            B: "scratch",
            C: "play"
        },
        correctAnswer: "B"
    },
    {   question: "Though I wander the earth, I am no longer here; I am pale and chill everyone near.",
        choices: {
            A: "ghost",
            B: "breeze",
            C: "storm"
        },
        correctAnswer: "A"
    },
    {   question: "If you're worried grandpa will bite, just remove these.",
        choices: {
            A: "teeth",
            B: "cane",
            C: "dentures"
        },
        correctAnswer: "C"
    },
    {   question: "I look at you, you look at me. I raise my right, you raise your left.",
        choices: {
            A: "mirror",
            B: "painting",
            C: "twin"
        },
        correctAnswer: "A"
    },
    {   question: "What kind of nail can be grown?",
        choices: {
            A: "chisel",
            B: "fingernail",
            C: "hammer"
        },
        correctAnswer: "B"
    },
    {   question: "A single-seater best accompanied by circus music and great balance.",
        choices: {
            A: "unicycle",
            B: "bicycle",
            C: "tricycle"
        },
        correctAnswer: "A"
    },
    {   question: "People want it and when they have it, they use it by giving it.",
        choices: {
            A: "money",
            B: "time",
            C: "air"
        },
        correctAnswer: "A"
    },
    {   question: "A crafty use of long pieces of wool to make a scarf.",
        choices: {
            A: "cook",
            B: "mix",
            C: "knit"
        },
        correctAnswer: "C"
    },
    {   question: "Reserved for royalty and damaged teeth.",
        choices: {
            A: "tea",
            B: "sweets",
            C: "Crown"
        },
        correctAnswer: "C"
    },
    {   question: "I'm in the sky; sometimes I'm white, other times I'm dark; sometimes I'm not there at all.",
        choices: {
            A: "star",
            B: "cloud",
            C: "chocolate"
        },
        correctAnswer: "B"
    },
    {   question: "Cold head and feet; round as a ball, always turning around itself.",
        choices: {
            A: "Earth",
            B: "baseball",
            C: "snow-globe"
        },
        correctAnswer: "A"
    },
    {   question: "You can draw me, fire me or fill me in.",
        choices: {
            A: "gun",
            B: "painting",
            C: "picture"
        },
        correctAnswer: "A"
    },
    {   question: "What is the difference between here and there?",
        choices: {
            A: "space",
            B: "time",
            C: "T"
        },
        correctAnswer: "C"
    },
    {   question: "You can come to me when nature calls.",
        choices: {
            A: "bedroom",
            B: "bathroom",
            C: "kitchen"
        },
        correctAnswer: "B"
    },
    {   question: "Before crust hardens.",
        choices: {
            A: "dough",
            B: "bread",
            C: "tea"
        },
        correctAnswer: "A"
    },
    {   question: "What doesn't get wetter no matter how much rain falls on it?",
        choices: {
            A: "cloth",
            B: "fire",
            C: "water"
        },
        correctAnswer: "C"
    },
    {   question: "What do you get when you milk a cow after an earthquake?",
        choices: {
            A: "cheese",
            B: "ghee",
            C: "milkshake"
        },
        correctAnswer: "C"
    },
    {   question: "It is where queens, kings, knights and bishops go to war together.",
        choices: {
            A: "scrabble",
            B: "chess",
            C: "field"
        },
        correctAnswer: "B"
    },
    {   question: "I'm always around, but in the morning, I show. You'll always know me for my golden glow.",
        choices: {
            A: "sun",
            B: "moon",
            C: "star"
        },
        correctAnswer: "A"
    },
    {   question: "Santa shakes his belly like me.",
        choices: {
            A: "cake",
            B: "jelly",
            C: "cherry"
        },
        correctAnswer: "B"
    },
    {   question: "The edge of earth and bread.",
        choices: {
            A: "crust",
            B: "air",
            C: "dough"
        },
        correctAnswer: "A"
    },
    {   question: "What flies forever, rests never?",
        choices: {
            A: "time",
            B: "wind",
            C: "air"
        },
        correctAnswer: "A"
    },
    {   question: "I travel the world while drunk constantly.",
        choices: {
            A: "wind",
            B: "birds",
            C: "river"
        },
        correctAnswer: "C"
    },
    {   question: "It flavors your food and divides the year up.",
        choices: {
            A: "salt",
            B: "season",
            C: "pepper"
        },
        correctAnswer: "B"
    },
    {   question: "Mary's father has 4 daughters; Nana, Nene, Nini and...",
        choices: {
            A: "Nunu",
            B: "Nono",
            C: "Mary"
        },
        correctAnswer: "C"
    },
    {   question: "What kind of fish chases a mouse?",
        choices: {
            A: "tilapia",
            B: "catfish",
            C: "tuna"
        },
        correctAnswer: "B"
    },
    {   question: "A colorful bird that talks.",
        choices: {
            A: "hen",
            B: "parrot",
            C: "peacock"
        },
        correctAnswer: "B"
    },
    {   question: "Many hear me, but no one sees me and I only speak when spoken to.",
        choices: {
            A: "mirror",
            B: "Siri",
            C: "echo"
        },
        correctAnswer: "C"
    },
    {   question: "Santa's favorite entrance for a home invasion.",
        choices: {
            A: "bathroom",
            B: "door",
            C: "chimney"
        },
        correctAnswer: "C"
    },
    {   question: "If you take off my skin, I will not cry, but you will.",
        choices: {
            A: "onion",
            B: "orange",
            C: "banana"
        },
        correctAnswer: "A"
    },
    {   question: "A nut-cracker uo in a tree.",
        choices: {
            A: "ballerina",
            B: "squirrel",
            C: "straycat"
        },
        correctAnswer: "B"
    },
    {   question: "What animal keeps the best time?",
        choices: {
            A: "watchdog",
            B: "parrot",
            C: "monkey"
        },
        correctAnswer: "A"
    },
    {   question: "I'm a candy that looks like a shepherd's staff.",
        choices: {
            A: "gum",
            B: "lollipop",
            C: "candycane"
        },
        correctAnswer: "C"
    },
    {   question: "Everyone would lose their head without me.",
        choices: {
            A: "money",
            B: "neck",
            C: "pizza"
        },
        correctAnswer: "B"
    },
    {   question: "I help boats park. What am I?",
        choices: {
            A: "anchor",
            B: "sailor",
            C: "lifeguard"
        },
        correctAnswer: "A"
    },
    {   question: "It is worldwide and only a spider could weave one.",
        choices: {
            A: "Google",
            B: "wool",
            C: "web"
        },
        correctAnswer: "C"
    },
    {   question: "For most, I am fast; for others, I am slow and make the world go.",
        choices: {
            A: "time",
            B: "work",
            C: "money"
        },
        correctAnswer: "A"
    },
    {   question: "People walk over me but boats go under me. What am I?",
        choices: {
            A: "pavement",
            B: "bridge",
            C: "water"
        },
        correctAnswer: "B"
    },
    {   question: "What is round, has a twin and sees mre than most?",
        choices: {
            A: "nose",
            B: "neck",
            C: "eye"
        },
        correctAnswer: "C"
    },
    {   question: "They are big and blue, and larger than seas.",
        choices: {
            A: "mountains",
            B: "oceans",
            C: "rivers"
        },
        correctAnswer: "B"
    },
    {   question: "It's what light turns into at night.",
        choices: {
            A: "stars",
            B: "bright",
            C: "darkness"
        },
        correctAnswer: "C"
    },
    {   question: "They are great, floaty and fun until they explode and give you a little scare.",
        choices: {
            A: "clouds",
            B: "balls",
            C: "balloons"
        },
        correctAnswer: "C"
    },
    {   question: "Kids hunt for them in Easter.",
        choices: {
            A: "rabbits",
            B: "candy",
            C: "eggs"
        },
        correctAnswer: "C"
    },
    {   question: "A natural tattoo on babies.",
        choices: {
            A: "birthmark",
            B: "eyes",
            C: "toes"
        },
        correctAnswer: "A"
    },
    {   question: "Feared on the playground, steals your lunch money and distributes wedgies.",
        choices: {
            A: "teacher",
            B: "bully",
            C: "friend"
        },
        correctAnswer: "B"
    },
    {   question: "The main difference between us and zombies.",
        choices: {
            A: "size",
            B: "speed",
            C: "life"
        },
        correctAnswer: "C"
    },
    {   question: "What kind of shoes can you make with banana peels?",
        choices: {
            A: "heels",
            B: "sneakers",
            C: "slippers"
        },
        correctAnswer: "C"
    },
    {   question: "Gumby and yoga instructors have this in common.",
        choices: {
            A: "slim",
            B: "flexible",
            C: "diet"
        },
        correctAnswer: "B"
    },
    {   question: "I run up and down the stairs without moving.",
        choices: {
            A: "wind",
            B: "staircase",
            C: "rug"
        },
        correctAnswer: "C"
    },
    {   question: "You consume me at breakfast time with milk.",
        choices: {
            A: "juice",
            B: "cereal",
            C: "water"
        },
        correctAnswer: "B"
    },
    {   question: "War fought with pieces on a board.",
        choices: {
            A: "scrabble",
            B: "cards",
            C: "chess"
        },
        correctAnswer: "C"
    },
    {   question: "I'm a pie but I come with pepperoni and cheese.",
        choices: {
            A: "burger",
            B: "cake",
            C: "pizza"
        },
        correctAnswer: "C"
    },
    {   question: "Godzilla calls this place home.",
        choices: {
            A: "Japan",
            B: "China",
            C: "France"
        },
        correctAnswer: "A"
    },
    {   question: "I'm a sound made by felines when petted.",
        choices: {
            A: "grunt",
            B: "purr",
            C: "bark"
        },
        correctAnswer: "B"
    },
    {   question: "What did 0 say to 8?",
        choices: {
            A: "I love you",
            B: "Nice belt!",
            C: "Bye!"
        },
        correctAnswer: "B"
    },
    {   question: "What describes universities like Harvard and can be poisonous?",
        choices: {
            A: "lilies",
            B: "berries",
            C: "ivy"
        },
        correctAnswer: "C"
    },
    {   question: "What bird can lift a heavy weight?",
        choices: {
            A: "stork",
            B: "crane",
            C: "crow"
        },
        correctAnswer: "B"
    },
    {   question: "This patch of land stands alone.",
        choices: {
            A: "island",
            B: "farm",
            C: "field"
        },
        correctAnswer: "A"
    },
    {   question: "This could make wooden boys' noses grow.",
        choices: {
            A: "truth",
            B: "lie",
            C: "trick"
        },
        correctAnswer: "B"
    },
    {   question: "Some women don't like to be called one; it cries and makes a lot of noise but smiles when you give it toys.",
        choices: {
            A: "pumpkin",
            B: "honey",
            C: "baby"
        },
        correctAnswer: "C"
    },
    {   question: "Hard to catch, easy to hold; can;t be seen unless it's cold.",
        choices: {
            A: "air",
            B: "wind",
            C: "breath"
        },
        correctAnswer: "C"
    },
    {   question: "I stink up your breath and fight evil vampires. Who am I?",
        choices: {
            A: "garlic",
            B: "onion",
            C: "tomato"
        },
        correctAnswer: "A"
    },
    {   question: "Soft, hairy, from door to door; I am the pet that always stays on the floor.",
        choices: {
            A: "hamster",
            B: "cat",
            C: "carpet"
        },
        correctAnswer: "C"
    },
    {   question: "I'm the child of water but when I return to water, I die.",
        choices: {
            A: "ice",
            B: "fish",
            C: "water"
        },
        correctAnswer: "A"
    },
    {   question: "Angry cats and deflating tyres make this noise.",
        choices: {
            A: "laugh",
            B: "purr",
            C: "hiss"
        },
        correctAnswer: "C"
    },
    {   question: "The famous princess who had several short men following her.",
        choices: {
            A: "Fiona",
            B: "Snow white",
            C: "Ariel"
        },
        correctAnswer: "B"
    },
    {   question: "It's only good if people laugh at it.",
        choices: {
            A: "joke",
            B: "tale",
            C: "story"
        },
        correctAnswer: "A"
    },
    {   question: "I'm a canvas full of stars.",
        choices: {
            A: "painting",
            B: "book",
            C: "sky"
        },
        correctAnswer: "C"
    },
    {   question: "You can drop me from the tallest building and I'll be fine; drop me in water and I'll die.",
        choices: {
            A: "rock",
            B: "paper",
            C: "scissors"
        },
        correctAnswer: "B"
    },
    {   question: "I can be winding and I can be straight; I can be smooth or rough. Sometimes both. Who am I?",
        choices: {
            A: "rope",
            B: "string",
            C: "road"
        },
        correctAnswer: "C"
    },
    {   question: "I'm 10 little bears you look at every day.",
        choices: {
            A: "hair",
            B: "nose",
            C: "toes"
        },
        correctAnswer: "C"
    },
    {   question: "Before Google, we actually had to go to this building full of knowledge.",
        choices: {
            A: "library",
            B: "office",
            C: "school"
        },
        correctAnswer: "A"
    },
    {   question: "It breathes fire in fairy tales.",
        choices: {
            A: "ogre",
            B: "dragon",
            C: "donkey"
        },
        correctAnswer: "B"
    },
    {   question: "What's an insect's favorite sport?",
        choices: {
            A: "basketball",
            B: "cricket",
            C: "racing"
        },
        correctAnswer: "B"
    },
    {   question: "One way, it's a number. Reversed, it's a snare.",
        choices: {
            A: "net",
            B: "nine",
            C: "two"
        },
        correctAnswer: "A"
    },
    {   question: "The negative hero in every story.",
        choices: {
            A: "superhero",
            B: "villain",
            C: "enemy"
        },
        correctAnswer: "B"
    },
    {   question: "Rub me and a genie might appear.",
        choices: {
            A: "lamp",
            B: "jar",
            C: "cup"
        },
        correctAnswer: "A"
    },
    {   question: "What cruel person would sit on a baby?",
        choices: {
            A: "parent",
            B: "babysitter",
            C: "chair"
        },
        correctAnswer: "B"
    },
    {   question: "What builds its house on a trap for its prey?",
        choices: {
            A: "fly",
            B: "ant",
            C: "spider"
        },
        correctAnswer: "C"
    },
    {   question: "It has the biggest wall and is also used for drinking tea.",
        choices: {
            A: "China",
            B: "USA",
            C: "Australia"
        },
        correctAnswer: "A"
    },
    {   question: "I don't speak but there is no word I can't make.",
        choices: {
            A: "song",
            B: "alphabet",
            C: "story"
        },
        correctAnswer: "B"
    },
    {   question: "What has 2 hands, a round face and always runs but stays in place?",
        choices: {
            A: "clock",
            B: "time",
            C: "bottle"
        },
        correctAnswer: "A"
    },
    {   question: "I'm Turkey day!",
        choices: {
            A: "Christmas",
            B: "Easter",
            C: "Thanksgiving"
        },
        correctAnswer: "C"
    },
    {   question: "I'm milky white and scare people on Halloween.",
        choices: {
            A: "bedsheet",
            B: "ghost",
            C: "vampire"
        },
        correctAnswer: "B"
    },
    {   question: "Which letter of the aplhabet has the most water?",
        choices: {
            A: "C",
            B: "O",
            C: "U"
        },
        correctAnswer: "A"
    },
    {   question: "Its days are numbered.",
        choices: {
            A: "calender",
            B: "year",
            C: "month"
        },
        correctAnswer: "A"
    },
    {   question: "I'm Turkey day!",
        choices: {
            A: "Christmas",
            B: "Easter",
            C: "Thanksgiving"
        },
        correctAnswer: "C"
    },
    {   question: "What do butterflies sleep on?",
        choices: {
            A: "bed",
            B: "sofa",
            C: "caterpillow"
        },
        correctAnswer: "C"
    },
    {   question: "I'm a way to say goodbye to your sweetheart.",
        choices: {
            A: "kiss",
            B: "punch",
            C: "kick"
        },
        correctAnswer: "A"
    },
    {   question: "Do what he says and you'll be fine. Don't and you'll lose the game.",
        choices: {
            A: "Peter",
            B: "Johnny",
            C: "Simon"
        },
        correctAnswer: "C"
    },
    {   question: "I'm added to cereal in the morning.",
        choices: {
            A: "bread",
            B: "milk",
            C: "water"
        },
        correctAnswer: "B"
    },
    {   question: "If you're stealing honey, I will happily attack you.",
        choices: {
            A: "butterfly",
            B: "bee",
            C: "bird"
        },
        correctAnswer: "B"
    },
    {   question: "What 8-letter word can have a letter taken out and still be a word?",
        choices: {
            A: "calendar",
            B: "tomorrow",
            C: "envelope"
        },
        correctAnswer: "C"
    },
    {   question: "What has you stop on green and go on red?",
        choices: {
            A: "watermelon",
            B: "mango",
            C: "orange"
        },
        correctAnswer: "A"
    },
    {   question: "What day within a week does not end in Y?",
        choices: {
            A: "none",
            B: "Monday",
            C: "tomorrow"
        },
        correctAnswer: "C"
    },
    {   question: "How many seconds are in a year?",
        choices: {
            A: "31536001",
            B: "10",
            C: "12"
        },
        correctAnswer: "C"
    },
    {   question: "What type of bow can never be tied?",
        choices: {
            A: "hairbow",
            B: "rainbow",
            C: "bowtie"
        },
        correctAnswer: "B"
    },
    {   question: "What has 13 hearts but no other organs?",
        choices: {
            A: "deck",
            B: "drawer",
            C: "chest"
        },
        correctAnswer: "A"
    },
    {   question: "You can see me in water but I never get wet.",
        choices: {
            A: "reflection",
            B: "seaweed",
            C: "fish"
        },
        correctAnswer: "A"
    },
    {   question: "What is in the middle of the sky?",
        choices: {
            A: "clouds",
            B: "oceans",
            C: "'k'"
        },
        correctAnswer: "C"
    },
    {   question: "I have numbers on my face but I can't find 13 in any place.",
        choices: {
            A: "book",
            B: "clock",
            C: "bag"
        },
        correctAnswer: "B"
    },
    {   question: "A dog can cross a river without getting wet if the river is...",
        choices: {
            A: "still",
            B: "moving",
            C: "frozen"
        },
        correctAnswer: "C"
    },
    {   question: "What is the richest nut?",
        choices: {
            A: "groundnut",
            B: "coconut",
            C: "cashewnut"
        },
        correctAnswer: "C"
    },
    {   question: "What fruit never wants to be alone?",
        choices: {
            A: "pear",
            B: "peach",
            C: "banana"
        },
        correctAnswer: "A"
    },
    {   question: "What fruit wants to go wild and crazy?",
        choices: {
            A: "banana",
            B: "mango",
            C: "apple"
        },
        correctAnswer: "A"
    },
    {   question: "What fruit can you use to sip water?",
        choices: {
            A: "orange",
            B: "date",
            C: "strawberry"
        },
        correctAnswer: "C"
    },
    {   question: "What fruit is always sad?",
        choices: {
            A: "passion",
            B: "apple",
            C: "blueberry"
        },
        correctAnswer: "C"
    },
    {   question: "What kind of coat can only be put on when wet?",
        choices: {
            A: "raincoat",
            B: "paint",
            C: "jacket"
        },
        correctAnswer: "B"
    },
    {   question: "What gets sharper the more you use it?",
        choices: {
            A: "pencil",
            B: "pen",
            C: "brain"
        },
        correctAnswer: "C"
    },
    {   question: "They come out at night without being called and are lost in the sky without being stolen.",
        choices: {
            A: "stars",
            B: "moon",
            C: "clouds"
        },
        correctAnswer: "A"
    },
    {   question: "Who always enjoys poor health?",
        choices: {
            A: "doctor",
            B: "patient",
            C: "nurse"
        },
        correctAnswer: "A"
    },
    {   question: "A doctor may remove one from the neck of a Dracula victim.",
        choices: {
            A: "needle",
            B: "fang",
            C: "hook"
        },
        correctAnswer: "B"
    },
    {   question: "I am your mother's brother's only brother-in-law. Who am I?",
        choices: {
            A: "father",
            B: "uncle",
            C: "nephew"
        },
        correctAnswer: "A"
    },
    {   question: "What is born on the ground but floats to the sky, to be returned again to the ground?",
        choices: {
            A: "leaf",
            B: "rain",
            C: "balloon"
        },
        correctAnswer: "B"
    },
    {   question: "I am a tool for magical fairies.",
        choices: {
            A: "gold",
            B: "silver",
            C: "wand"
        },
        correctAnswer: "C"
    },
    {   question: "It is a form of plastic money.",
        choices: {
            A: "credit card",
            B: "coins",
            C: "notes"
        },
        correctAnswer: "A"
    },
    {   question: "What kind of soda must you not drink?",
        choices: {
            A: "sprite",
            B: "baking soda",
            C: "cola"
        },
        correctAnswer: "B"
    },
    {   question: "I will not die when hung; I will dry when wrung.",
        choices: {
            A: "rope",
            B: "cloth",
            C: "necklace"
        },
        correctAnswer: "B"
    },
    {   question: "Some are clean, some are dirty; all are meant to get a chuckle. Some might take offense to them.",
        choices: {
            A: "jokes",
            B: "songs",
            C: "stories"
        },
        correctAnswer: "A"
    },
    {   question: "Bumpy form of transportation in desert cultures.",
        choices: {
            A: "donkey",
            B: "camel",
            C: "horse"
        },
        correctAnswer: "B"
    },
    {   question: "A delicious way of representing data.",
        choices: {
            A: "picture",
            B: "drawing",
            C: "piechart"
        },
        correctAnswer: "C"
    },
    {   question: "My teeth are sharp, my back is straight; to cut things up is my work.",
        choices: {
            A: "saw",
            B: "knife",
            C: "razor"
        },
        correctAnswer: "A"
    },
    {   question: "I go up and down at the same time.",
        choices: {
            A: "seesaw",
            B: "staircase",
            C: "rain"
        },
        correctAnswer: "A"
    },
    {   question: "I usually wear a dark or yellow coat and make marks whenever I'm held.",
        choices: {
            A: "chalk",
            B: "pencil",
            C: "marker"
        },
        correctAnswer: "B"
    },
    {   question: "What always comes into the house through a keyhole?",
        choices: {
            A: "dog",
            B: "cat",
            C: "key"
        },
        correctAnswer: "C"
    },
    {   question: "I invade your home once a year, but only if you've been good.",
        choices: {
            A: "burgler",
            B: "Santa",
            C: "police"
        },
        correctAnswer: "B"
    },
    {   question: "They gave me a mouth but didn't give me a breath; water brings me life but the sun kills me. Who am I?",
        choices: {
            A: "snowman",
            B: "icecream",
            C: "jelly"
        },
        correctAnswer: "A"
    },
    {   question: "It's anything but amusing when this body part gets hit.",
        choices: {
            A: "funnybone",
            B: "arm",
            C: "neck"
        },
        correctAnswer: "A"
    },
    {   question: "What suits do lawyers wear?",
        choices: {
            A: "expenxive",
            B: "fancy",
            C: "lawsuits"
        },
        correctAnswer: "C"
    },
    {   question: "Temporary evidence of where you've been strolling.",
        choices: {
            A: "socks",
            B: "footprint",
            C: "fingerprint"
        },
        correctAnswer: "B"
    },
    {   question: "You take my clothes off when you put your clothes on.",
        choices: {
            A: "hanger",
            B: "wall",
            C: "mirror"
        },
        correctAnswer: "A"
    },
    {   question: "You speak this when you're being sincere.",
        choices: {
            A: "truth",
            B: "lie",
            C: "joke"
        },
        correctAnswer: "A"
    },
    {   question: "It has 88 keys but can;t open a single door.",
        choices: {
            A: "guitar",
            B: "drum",
            C: "piano"
        },
        correctAnswer: "C"
    },
    {   question: "What dish consists of tortilla chips smothered in cheese?",
        choices: {
            A: "pizza",
            B: "nacho",
            C: "hotdog"
        },
        correctAnswer: "B"
    },
    {   question: "I'm not a bird but I can fly through the sky; I'm not a river but I'm full of water.",
        choices: {
            A: "river",
            B: "plane",
            C: "cloud"
        },
        correctAnswer: "C"
    },
    {   question: "I can be heard in a court or carried with you.",
        choices: {
            A: "case",
            B: "backpack",
            C: "handbag"
        },
        correctAnswer: "A"
    },
    {   question: "They swim around in schools or pods and they are related to whales.",
        choices: {
            A: "sharks",
            B: "dolphins",
            C: "birds"
        },
        correctAnswer: "B"
    },
    {   question: "The word most commonly said before taking a glass of wine.",
        choices: {
            A: "cheers",
            B: "thanks",
            C: "goodbye"
        },
        correctAnswer: "A"
    },
    {   question: "What is easy to get into bt hard to get out of?",
        choices: {
            A: "car",
            B: "trouble",
            C: "house"
        },
        correctAnswer: "B"
    },
    {   question: "If you're running a race and pass the person in 2nd place, what place will you be in?",
        choices: {
            A: "first",
            B: "second",
            C: "third"
        },
        correctAnswer: "B"
    },
    {   question: "What word in the dictionary is spelled wrong?",
        choices: {
            A: "beautyful",
            B: "happilly",
            C: "wrong"
        },
        correctAnswer: "C"
    },
    {   question: "What kind of lion never roars?",
        choices: {
            A: "sad",
            B: "hungry",
            C: "dandelion"
        },
        correctAnswer: "C"
    },
    {   question: "I grow down as I grow up.",
        choices: {
            A: "goose",
            B: "hen",
            C: "puppy"
        },
        correctAnswer: "A"
    },
    {   question: "What has a thousand needles but can't sew?",
        choices: {
            A: "squirrel",
            B: "porcupine",
            C: "trutle"
        },
        correctAnswer: "B"
    },
    {   question: "I jump when I walk and sit when I stand. Who am I?",
        choices: {
            A: "ostrich",
            B: "peacock",
            C: "kangaroo"
        },
        correctAnswer: "C"
    },
    {   question: "I'm a sea animal with 8 arms and a soft body. I squirt ink to protect myself.",
        choices: {
            A: "starfish",
            B: "whale",
            C: "octopus"
        },
        correctAnswer: "B"
    },
    {   question: "I'm a big cat with black stripes and sharp claws. I love to hunt in the jungle.",
        choices: {
            A: "elephant",
            B: "giraffe",
            C: "tiger"
        },
        correctAnswer: "C"
    },
    {   question: "I'm a slow-moving animal with a hard shell on my back. I love leafy greens.",
        choices: {
            A: "tortoise",
            B: "chameleon",
            C: "snail"
        },
        correctAnswer: "A"
    },
    {   question: "What do you call a pig that loves karate?",
        choices: {
            A: "bacon",
            B: "porkchop",
            C: "ribs"
        },
        correctAnswer: "B"
    },
    {   question: "What is a mummy's favorite type of music?",
        choices: {
            A: "hiphop",
            B: "wrap",
            C: "rock"
        },
        correctAnswer: "B"
    },
    {   question: "What do you get when you put a radio in the fridge?",
        choices: {
            A: "cool music",
            B: "desert",
            C: "pudding"
        },
        correctAnswer: "A"
    },
    {   question: "What has a foot but no leg?",
        choices: {
            A: "ruler",
            B: "pen",
            C: "crayon"
        },
        correctAnswer: "A"
    },
    {   question: "How do mails travel?",
        choices: {
            A: "they don't",
            B: "fast",
            C: "slow"
        },
        correctAnswer: "C"
    },
    {   question: "What bone in the body has a sense of humor?",
        choices: {
            A: "tibia",
            B: "humorous",
            C: "femur"
        },
        correctAnswer: "B"
    },
    {   question: "What dog has no tail?",
        choices: {
            A: "hotdog",
            B: "husky",
            C: "german shepherd"
        },
        correctAnswer: "A"
    },
    {   question: "What shoes would you wear when your basement is flooded?",
        choices: {
            A: "slippers",
            B: "pumps",
            C: "sneakers"
        },
        correctAnswer: "B"
    },
    {   question: "What kind of table has no legs?",
        choices: {
            A: "small table",
            B: "glass table",
            C: "periodic table"
        },
        correctAnswer: "C"
    },
    {   question: "What age do most travellers have?",
        choices: {
            A: "old",
            B: "young",
            C: "baggage"
        },
        correctAnswer: "C"
    },
    {   question: "Who is the guy that crossed the road?",
        choices: {
            A: "chicken",
            B: "dog",
            C: "duck"
        },
        correctAnswer: "A"
    },
    {   question: "Where is the ocean deepest?",
        choices: {
            A: "surface",
            B: "bottom",
            C: "mystery"
        },
        correctAnswer: "B"
    },
    {   question: "What is the coziest plce for Dracula?",
        choices: {
            A: "kitchen",
            B: "coffin",
            C: "bedroom"
        },
        correctAnswer: "B"
    },
    {   question: "Which animal is the best at baseball?",
        choices: {
            A: "bat",
            B: "parrot",
            C: "dog"
        },
        correctAnswer: "A"
    },
    {   question: "What did the raincloud wear under his raincoat?",
        choices: {
            A: "jacket",
            B: "sweater",
            C: "thunderwear"
        },
        correctAnswer: "C"
    },
    {   question: "What food lives at the beach?",
        choices: {
            A: "donut",
            B: "sandwich",
            C: "fish"
        },
        correctAnswer: "B"
    },
    {   question: "According to many students, dogs have an appetite for me.",
        choices: {
            A: "meat",
            B: "homework",
            C: "dog food"
        },
        correctAnswer: "B"
    },
    {   question: "What smells the most in the kitchen?",
        choices: {
            A: "bacon",
            B: "pizza",
            C: "nose"
        },
        correctAnswer: "C"
    },
    {   question: "What is a witch's favorite subject?",
        choices: {
            A: "Math",
            B: "Drama",
            C: "Spelling"
        },
        correctAnswer: "C"
    },
    {   question: "When your undies attack you?",
        choices: {
            A: "wedgie",
            B: "war",
            C: "fun"
        },
        correctAnswer: "A"
    },
    {   question: "What kind of ship do students study?",
        choices: {
            A: "Titanic",
            B: "relationship",
            C: "scholarship"
        },
        correctAnswer: "C"
    },
    {   question: "What is long, pink and wet and is rude to pull out in front of others?",
        choices: {
            A: "lollipop",
            B: "tongue",
            C: "toothbrush"
        },
        correctAnswer: "B"
    },
    {   question: "What rains in the North Pole?",
        choices: {
            A: "ice",
            B: "snow",
            C: "reindeer"
        },
        correctAnswer: "C"
    },
    {   question: "What starts with P, ends with E and has a million letters inside?",
        choices: {
            A: "post-office",
            B: "email",
            C: "mailbox"
        },
        correctAnswer: "A"
    },
    {   question: "I tell you secrets without even talking.",
        choices: {
            A: "book",
            B: "snitch",
            C: "song"
        },
        correctAnswer: "A"
    },
    {   question: "Water is my only medicine.",
        choices: {
            A: "hunger",
            B: "sadness",
            C: "thirst"
        },
        correctAnswer: "C"
    },
    {   question: "Whithout me, everything falls apart",
        choices: {
            A: "crayons",
            B: "glue",
            C: "paper"
        },
        correctAnswer: "B"
    },
    // Add more riddles in a similar format
];

let currentRiddleIndex = 0;
let userPoints = parseInt(localStorage.getItem('userPoints')) || 0;

// Check if progress is stored in Local Storage
if (localStorage.getItem('currentRiddleIndex') !== null) {
    currentRiddleIndex = parseInt(localStorage.getItem('currentRiddleIndex'));
    userPoints = parseInt(localStorage.getItem('userPoints'));
}

function displayRiddle(index) {
    const riddle = riddles[index];
    document.getElementById('riddleText').textContent = riddle.question;
    const choiceButtons = document.querySelectorAll('.choices button');
    choiceButtons.forEach((button, i) => {
        button.textContent = `${String.fromCharCode(65 + i)}. ${riddle.choices[String.fromCharCode(65 + i)]}`;
    });
}

function checkAnswer(selectedChoice) {
    const currentRiddle = riddles[currentRiddleIndex];
    
    if (!currentRiddle.answeredCorrectly) { // Check if the question has not been answered correctly
        if (selectedChoice === currentRiddle.correctAnswer) {
            document.getElementById('result').textContent = 'Correct! Well done!';
            userPoints += 15;
            localStorage.setItem('userPoints', userPoints.toString());
            document.getElementById('userPoints').textContent = `Points: ${userPoints}`;
            currentRiddle.answeredCorrectly = true; // Set the flag to indicate the question has been answered correctly
        } else {
            document.getElementById('result').textContent = 'Oops! Try again.';
        }
    } else {
        document.getElementById('result').textContent = 'You already answered this question correctly.';
    }
    document.getElementById('nextButton').style.display = 'block';
}


function nextRiddle() {
    currentRiddleIndex++;
    if (currentRiddleIndex < riddles.length) {
        displayRiddle(currentRiddleIndex);
        document.getElementById('result').textContent = '';
        document.getElementById('nextButton').style.display = 'none';
        localStorage.setItem('currentRiddleIndex', currentRiddleIndex.toString());
    } else {
        document.getElementById('riddleText').textContent = 'Congratulations! You have completed all the riddles.';
        document.getElementById('choices').style.display = 'none';
        document.getElementById('result').style.display = 'none';
        document.getElementById('nextButton').style.display = 'none';
    }
    localStorage.setItem('currentRiddleIndex', currentRiddleIndex.toString());
}

function resetGame() {
    localStorage.clear(); // Clear all stored data in Local Storage
    currentRiddleIndex = 0;
    userPoints = 0;
    displayRiddle(currentRiddleIndex);
    document.getElementById('userPoints').textContent = `Points: ${userPoints}`;
    document.getElementById('result').textContent = '';
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('resetButton').style.display = 'none';
    localStorage.setItem('currentRiddleIndex', currentRiddleIndex.toString());
    localStorage.setItem('userPoints', userPoints.toString());
}

// Initial display of the first riddle
displayRiddle(currentRiddleIndex);
document.getElementById('userPoints').textContent = `Points: ${userPoints}`;