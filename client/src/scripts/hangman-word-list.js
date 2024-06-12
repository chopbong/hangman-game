const wordList = [
    { word: "pyramid", hint: "A large triangular structure in Egypt" },
    { word: "chocolate", hint: "A sweet treat made from cocoa beans" },
    { word: "lighthouse", hint: "A tower with a light to guide ships" },
    { word: "submarine", hint: "An underwater vessel" },
    { word: "telescope", hint: "An instrument to observe distant objects" },
    { word: "unicorn", hint: "A mythical horse with a single horn" },
    { word: "basketball", hint: "A sport played with a round ball and hoop" },
    { word: "computer", hint: "An electronic device for processing data" },
    { word: "fireworks", hint: "Explosive devices used for celebrations" },
    { word: "apple", hint: "A common fruit" },
    { word: "banana", hint: "A yellow fruit" },
    { word: "cherry", hint: "A small red fruit" },
    { word: "date", hint: "A sweet fruit often dried" },
    { word: "grape", hint: "A small round fruit often used to make wine" },
    { word: "honeydew", hint: "A type of melon" },
    { word: "kiwi", hint: "A fruit with green flesh and a brown skin" },
    { word: "lemon", hint: "A sour yellow fruit" },
    { word: "mango", hint: "A tropical fruit with orange flesh" },
    { word: "orange", hint: "A citrus fruit" },
    { word: "papaya", hint: "A tropical fruit with orange flesh" },
    { word: "raspberry", hint: "A small red fruit with many seeds" },
    { word: "strawberry", hint: "A red fruit with tiny seeds on its surface" },
    { word: "tangerine", hint: "A small citrus fruit" },
    { word: "watermelon", hint: "A large fruit with a green rind and red flesh" },
    { word: "zucchini", hint: "A type of squash" },
    { word: "airplane", hint: "A vehicle that flies" },
    { word: "bicycle", hint: "A vehicle with two wheels" },
    { word: "car", hint: "A common vehicle for personal transport" },
    { word: "drone", hint: "An unmanned aerial vehicle" },
    { word: "elevator", hint: "A platform for raising and lowering people or things to different floors or levels" },
    { word: "ferry", hint: "A boat or ship for conveying passengers and goods" },
    { word: "glider", hint: "An aircraft without an engine" },
    { word: "helicopter", hint: "A type of rotorcraft" },
    { word: "icebreaker", hint: "A ship designed to move through ice" },
    { word: "jet", hint: "A fast aircraft powered by jet engines" },
    { word: "kayak", hint: "A small, narrow watercraft" },
    { word: "limousine", hint: "A large, luxurious car" },
    { word: "motorcycle", hint: "A two-wheeled motor vehicle" },
    { word: "navy", hint: "A fleet of ships" },
    { word: "oceanliner", hint: "A large ship for transporting people across seas" },
    { word: "parachute", hint: "A device used to slow the descent of a person or object through the air" },
    { word: "rocket", hint: "A vehicle designed to travel through space" },
    { word: "train", hint: "A series of connected vehicles that run on tracks" },
    { word: "unicycle", hint: "A cycle with a single wheel" },
    { word: "wagon", hint: "A vehicle used for transporting goods or another specified purpose" },
    { word: "yacht", hint: "A medium-sized sailboat equipped for cruising or racing" },
    { word: "zeppelin", hint: "A type of rigid airship" },
    { word: "novel", hint: "A long written story usually in prose" },
    { word: "poem", hint: "A piece of writing in verse" },
    { word: "essay", hint: "A short piece of writing on a particular subject" },
    { word: "biography", hint: "A detailed description of a person's life" },
    { word: "fantasy", hint: "A genre of imaginative fiction" },
    { word: "mystery", hint: "A genre dealing with solving a crime or unraveling secrets" },
    { word: "tragedy", hint: "A genre of drama based on human suffering" },
    { word: "comedy", hint: "A genre of fiction characterized by humor" },
    { word: "romance", hint: "A genre focused on love and relationships" },
    { word: "thriller", hint: "A genre characterized by excitement and suspense" },
    { word: "nonfiction", hint: "Prose writing based on facts" },
    { word: "anthology", hint: "A collection of literary works" },
    { word: "memoir", hint: "A historical account or biography written from personal knowledge" },
    { word: "novella", hint: "A short novel" },
    { word: "myth", hint: "A traditional story involving supernatural beings" },
    { word: "fairytale", hint: "A children's story about magical and imaginary beings" },
    { word: "satire", hint: "A genre that uses humor to criticize" },
    { word: "prose", hint: "Written or spoken language in its ordinary form" },
    { word: "forest", hint: "A large area covered chiefly with trees and undergrowth" },
    { word: "river", hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream" },
    { word: "mountain", hint: "A large natural elevation of the earth's surface rising abruptly from the surrounding level" },
    { word: "ocean", hint: "A vast body of salt water that covers almost three-quarters of the earth's surface" },
    { word: "desert", hint: "A barren area of landscape where little precipitation occurs" },
    { word: "rainforest", hint: "A dense forest rich in biodiversity, typically found in tropical areas with heavy rainfall" },
    { word: "waterfall", hint: "Water from a river or stream, dropping from a higher to a lower point, sometimes from a great height" },
    { word: "volcano", hint: "A mountain or hill that erupts lava, hot vapor, and gases" },
    { word: "canyon", hint: "A deep gorge, typically one with a river flowing through it" },
    { word: "island", hint: "A piece of land surrounded by water" },
    { word: "savanna", hint: "A grassy plain in tropical and subtropical regions, with few trees" },
    { word: "glacier", hint: "A slowly moving mass or river of ice formed by the accumulation of snow" },
    { word: "cave", hint: "A large underground chamber, typically of natural origin" },
    { word: "reef", hint: "A ridge of jagged rock, coral, or sand just above or below the surface of the sea" },
    { word: "cliff", hint: "A steep rock face, especially at the edge of the sea" },
    { word: "swamp", hint: "An area of low-lying, uncultivated ground where water collects; a bog or marsh" },
    { word: "valley", hint: "A low area of land between hills or mountains, typically with a river or stream flowing through it" },
    { word: "prairie", hint: "A large open area of grassland" },
    { word: "meadow", hint: "A piece of grassland, especially one used for hay" },
    { word: "plateau", hint: "An area of relatively level high ground" },
    { word: "pond", hint: "A small body of still water formed naturally or by hollowing or embanking" },
    { word: "lake", hint: "A large body of water surrounded by land" },
    { word: "hill", hint: "A naturally raised area of land, not as high or craggy as a mountain" },
    { word: "bay", hint: "A broad inlet of the sea where the land curves inward" },
    { word: "delta", hint: "A landform at the mouth of a river where it splits into several streams" },
    { word: "dune", hint: "A mound of sand formed by the wind, especially on the sea coast or in a desert" },
    { word: "spring", hint: "A place where water or oil wells up from an underground source" },
    { word: "oasis", hint: "A fertile spot in a desert where water is found" },
    { word: "wetland", hint: "Land consisting of marshes or swamps; saturated land" },
    { word: "archipelago", hint: "A group of islands" },
    { word: "peak", hint: "The pointed top of a mountain" },
    { word: "elephant", hint: "A large mammal with a trunk" },
    { word: "giraffe", hint: "A tall mammal with a long neck" },
    { word: "kangaroo", hint: "A marsupial native to Australia" },
    { word: "penguin", hint: "A flightless bird found in Antarctica" },
    { word: "dolphin", hint: "A highly intelligent marine mammal" },
    { word: "alligator", hint: "A large reptile with a hard skin that lives in or near rivers and lakes" },
    { word: "octopus", hint: "A sea creature with eight arms" },
    { word: "rhinoceros", hint: "A large mammal with one or two horns on its snout" },
    { word: "chameleon", hint: "A lizard that can change its color" },
    { word: "gorilla", hint: "A large ape native to Africa" },
    { word: "hippopotamus", hint: "A large animal with short legs and thick, dark grey skin that lives near water in Africa" },
    { word: "peacock", hint: "A bird known for its colorful tail feathers" },
    { word: "seahorse", hint: "A small marine fish with a horse-like head" },
    { word: "ostrich", hint: "A large flightless bird native to Africa" },
    { word: "platypus", hint: "A mammal that lays eggs and has a bill like a duck" },
    { word: "bat", hint: "A flying mammal" },
    { word: "dinosaur", hint: "A prehistoric reptile" },
    { word: "cheetah", hint: "The fastest land animal" },
    { word: "flamingo", hint: "A bird known for its pink feathers and long legs" },
    { word: "butterfly", hint: "An insect with colorful wings" },
    { word: "jellyfish", hint: "A marine animal with a gelatinous body and tentacles" },
    { word: "koala", hint: "A tree-dwelling marsupial native to Australia" },
    { word: "narwhal", hint: "A marine mammal with a long, spiral tusk" },
    { word: "porcupine", hint: "A rodent with sharp quills" },
    { word: "sloth", hint: "A slow-moving tree-dwelling mammal" },
    { word: "panda", hint: "A black and white bear native to China" },
    { word: "zebra", hint: "An African wild horse with black-and-white stripes" },
    { word: "eagle", hint: "A large bird of prey with a powerful beak" },
    { word: "doctor", hint: "A person trained to treat illnesses and injuries" },
    { word: "teacher", hint: "A person who educates others, often in a school" },
    { word: "engineer", hint: "A person who designs, builds, or maintains machines or structures" },
    { word: "artist", hint: "A person who creates visual or performing works of art" },
    { word: "chef", hint: "A person who cooks professionally, often in a restaurant" },
    { word: "pilot", hint: "A person who operates an aircraft" },
    { word: "lawyer", hint: "A person who practices or studies law" },
    { word: "firefighter", hint: "A person who extinguishes fires and assists in emergencies" },
    { word: "police", hint: "A person responsible for maintaining public order and safety" },
    { word: "nurse", hint: "A person trained to care for sick or injured people, typically in a hospital" },
    { word: "scientist", hint: "A person who conducts scientific research or experiments" },
    { word: "writer", hint: "A person who produces written works, such as books or articles" },
    { word: "mechanic", hint: "A person who repairs or maintains machinery" },
    { word: "plumber", hint: "A person who installs and repairs piping and appliances related to water supply" },
    { word: "electrician", hint: "A person who installs and maintains electrical wiring and equipment" },
    { word: "architect", hint: "A person who designs buildings and oversees their construction" },
    { word: "accountant", hint: "A person who keeps and audits financial records" },
    { word: "dentist", hint: "A person who specializes in the treatment of diseases and conditions of the oral cavity" },
    { word: "farmer", hint: "A person who owns or manages a farm, typically for food production" },
    { word: "veterinarian", hint: "A person who treats and cares for animals" },
    { word: "chemist", hint: "A person who specializes in the study of chemistry" },
    { word: "bartender", hint: "A person who serves drinks behind a bar" },
    { word: "waiter", hint: "A person who serves food and drinks to customers in a restaurant" },
    { word: "photographer", hint: "A person who takes photographs professionally" },
    { word: "librarian", hint: "A person who works in a library, organizing and maintaining its resources" },
    { word: "astronaut", hint: "A person trained to travel in a spacecraft" },
    { word: "psychologist", hint: "A person who studies the human mind and behavior" },
    { word: "surgeon", hint: "A person who performs surgical operations" },
    { word: "chair", hint: "A piece of furniture designed for sitting on, typically with a back and four legs" },
    { word: "table", hint: "A piece of furniture with a flat top, used for eating, writing, or working" },
    { word: "sofa", hint: "A long upholstered seat with a back and arms, for two or more people to sit on" },
    { word: "bed", hint: "A piece of furniture for sleeping on, typically consisting of a mattress supported by a frame" },
    { word: "wardrobe", hint: "A tall cupboard or cabinet in which clothes may be hung or stored" },
    { word: "desk", hint: "A piece of furniture with a flat or sloped surface for writing, reading, or working at" },
    { word: "bookcase", hint: "A piece of furniture with shelves for storing books" },
    { word: "dresser", hint: "A piece of furniture with drawers and compartments for storing clothes" },
    { word: "couch", hint: "Another term for sofa, typically used in North America" },
    { word: "armchair", hint: "A comfortable chair with side supports for the arms" },
    { word: "guitar", hint: "A musical instrument, usually made of wood, with six strings and a long neck" },
    { word: "piano", hint: "A large musical instrument with a row of black and white keys that are pressed to play" },
    { word: "violin", hint: "A stringed musical instrument played with a bow" },
    { word: "drums", hint: "Percussion instrument played with sticks or hands" },
    { word: "astronomy", hint: "The study of celestial objects and phenomena" },
    { word: "philosophy", hint: "The study of fundamental questions about existence, knowledge, values, reason, mind, and language" },
    { word: "biology", hint: "The study of living organisms, their interactions with each other and their environments" },
    { word: "chemistry", hint: "The study of the composition, structure, properties, and reactions of matter" },
    { word: "physics", hint: "The study of matter, energy, space, and time, and the interactions between them" },
    { word: "psychology", hint: "The scientific study of the human mind and behavior" },
    { word: "sociology", hint: "The study of society, human social behavior, and social groups" },
    { word: "linguistics", hint: "The scientific study of language and its structure" },
    { word: "engineering", hint: "The application of scientific and mathematics to design and build structures, machines, devices" },
    { word: "geology", hint: "The study of the Earth's structure, composition, and processes" },
    { word: "informatics", hint: "The study of the structure, behavior, and interactions of information systems" },
    { word: "anthropology", hint: "The study of human societies, cultures, and their development" },
    { word: "ethics", hint: "The study of moral principles that govern behavior" },
    { word: "logic", hint: "The study of reasoning and inference" },
    { word: "meteorology", hint: "The study of the Earth's atmosphere and weather" },
    { word: "rainbow", hint: "A meteorological phenomenon caused by reflection, refraction, and dispersion of light" },
    { word: "sunset", hint: "The sun's disappearance below the horizon in the evening" },
    { word: "earthquake", hint: "Sudden shaking of the Earth's surface due to tectonic plate movement" },
    { word: "tsunami", hint: "Large ocean wave caused by underwater earthquakes or volcanic eruptions" },
    { word: "tornado", hint: "Violently rotating column of air extending from thunderstorms to the ground" },
    { word: "lightning", hint: "Sudden electrostatic discharge during thunderstorms, often accompanied by thunder" },
    { word: "happiness", hint: "Emotion characterized by feelings of joy and contentment" },
    { word: "love", hint: "Deep affection or fondness towards someone or something" },
    { word: "freedom", hint: "The power or right to act, speak, or think without hindrance" },
    { word: "peace", hint: "State of tranquility or quiet, absence of war or conflict" },
    { word: "hope", hint: "Feeling of expectation and desire for a certain thing to happen" },
    { word: "justice", hint: "Fairness, moral rightness, or equity in the treatment of others" },
    { word: "wisdom", hint: "The quality of having experience, knowledge, and good judgment" },
    { word: "truth", hint: "The quality or state of being in accordance with fact or reality" },
    { word: "beauty", hint: "A combination of qualities that pleases the aesthetic senses" },
    { word: "kindness", hint: "The quality of being friendly, generous, and considerate" },
    { word: "forgiveness", hint: "The action or process of pardoning someone for a mistake or wrongdoing" },
    { word: "humility", hint: "The quality of being modest" },
    { word: "patience", hint: "The capacity to accept delay, trouble, or suffering without getting angry or upset" },
    { word: "faith", hint: "Complete trust or confidence in someone or something" },
    { word: "journey", hint: "An act of traveling from one place to another, especially a long and adventurous trip" },
    { word: "atmosphere", hint: "The envelope of gases surrounding the Earth or another planet" },
    { word: "discovery", hint: "The act of finding or uncovering something previously unknown or hidden" },
    { word: "whisper", hint: "A soft or quiet spoken word, often to convey secrecy or privacy" },
    { word: "treasure", hint: "Valuable objects or money hidden or lost, often sought after or protected" },
    { word: "silence", hint: "Complete absence of sound or noise" },
    { word: "legend", hint: "A traditional story sometimes regarded as historical but unauthenticated" },
    { word: "vitality", hint: "The state of being strong and active" },
    { word: "illuminate", hint: "To light up or make clear" },
    { word: "dance", hint: "Move rhythmically to music, typically following a sequence of steps" },
    { word: "study", hint: "Apply oneself to learning about a subject or field of knowledge" },
    { word: "sing", hint: "Produce musical sounds with the voice, often with words" },
    { word: "swim", hint: "Propel oneself through water using the limbs" },
    { word: "eat", hint: "Put food into the mouth, chew and swallow it" },
    { word: "sleep", hint: "Rest in a state of reduced consciousness, typically with the eyes closed and the body lying down" },
    { word: "walk", hint: "Move at a regular and fairly slow pace by lifting and setting down each foot in turn" },
    { word: "talk", hint: "Speak in order to give information or express ideas or feelings" },
    { word: "listen", hint: "Give one's attention to a sound" },
    { word: "think", hint: "Direct one's mind towards someone or something" },
    { word: "cry", hint: "Shed tears, typically as an expression of distress, pain, or sorrow" },
    { word: "vibrant", hint: "Full of energy and enthusiasm" },
    { word: "curious", hint: "Eager to know or learn something" },
    { word: "sorrowful", hint: "Feeling or showing sadness or grief" },
    { word: "brave", hint: "Ready to face and endure danger or pain; showing courage" },
    { word: "kind", hint: "Having a friendly, generous, and considerate nature" },
    { word: "clever", hint: "Quick to understand, learn, and devise or apply ideas" },
    { word: "loyal", hint: "Giving or showing firm and constant support to a person or institution" },
    { word: "optimistic", hint: "Hopeful and confident about the future" },
    { word: "empathetic", hint: "Showing an ability to understand and share the feelings of others" },
    { word: "resilient", hint: "Able to withstand or recover quickly from difficult conditions" },
    { word: "calm", hint: "Not showing or feeling nervousness, anger, or other strong emotions" },
    { word: "ambitious", hint: "Having or showing a strong desire and determination to succeed" }
];

export default wordList;