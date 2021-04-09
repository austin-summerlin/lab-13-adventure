const gallery = {
    id: 'gallery',
    title: 'Gallery Room',
    map: {
        top: '25%',
        left: '33%',
    },
    image: 'gallery.png',
    audio: 'zombie.wav',
    description: `
                You enter a gallery room filled with various works of art. In the center of the room is a large statue.
                You notice something is inside at the top of the statue. Also you notice there is a small alcove located in the 
                back of the room and you hear what sounds like someone moaning. What do you do?
                `,
    choices: [{
        id: 'investigatestatue',
        description: 'Investigate the statue.',
        result: `Using a ladder located in the room you ascend to the top of the statue. Inside is a map of the 1st floor.
                You take the map and head to the next room`,
        hp: 0,
        ammo: 0,
    }, {
        id: 'investigatesound',
        description: 'Investigate the sound.',
        result: `
                You investigate the strange sound and discover what looks like a man hunched over. Slowly the man turns his head
                to look at you. You notice that his face is gaunt and covered in blood, his eyes are souless. You warn him to stay away
                but he stands and lunges at you. The man grabs your arm and his nails dig into you, tearing at your skin. You manage to push 
                him away but he comes back at you again.  You fire three shots from your gun, yet the man is still coming at you. You fire two
                more shots and finally the man falls to the ground. Confused at what has happened you gather yourself and head to the next room.`,
        hp: -15,
        ammo: 7,
    }, {
        id: 'nextroom',
        description: 'Head to next room.',
        result: `Hearing the strange sounds you decide that it is best to head to the next room`,
        hp: 0,
        ammo: 0,
    }]
};

const hallway = {
    id: 'hallway',
    title: 'East Hallway',
    map: {
        top: '35%',
        left: '45%',
    },
    image: 'hallway.png',
    audio: 'window.wav',
    description: `You enter a long hallway that has windows all along the right side, it is raining outside. 
                You hear the sounds of dogs barking. You begin to walk through the hallway to the next door, 
                when all of a sudden a Rottweiler jumps through the window.  It turns looks at you and begins to run at you.
                What do you do?`,
    choices: [{
        id: 'fight',
        description: 'Try and stop the dog',
        result: `You decide to try and fight this beast, it jumps at you and latches onto you with its teeth.
        You try your hardest to shake it off of you, but you cannot. You manage to shoot the dog which momentarily
        releases the dog from your arm. You take another shot but the dog is so fast that you miss. The dog attacks again,
        this time it attacks your throat. You fall to the ground. You're Dead.`,
        hp: -100,
        ammo: 2,
    }, {
        id: 'run',
        description: 'Run Away',
        result: `As the dog begins to charge, you are able to avoid it. You run as fast as you can to the next door and make it through.`,
        hp: 0,
        ammo: 0,
    }]
};

const library = {
    id: 'library',
    title: 'Library',
    map: {
        top: '90%',
        left: '70%',
    },
    image: 'library.png',
    description: `After exiting the hallway you enter into another hallway that has many different doors. You walk to the end
                of the hallway and turn to the left. You are faced with two more doors, you chose the one to your left. Once
                through the door you enter into an empty room with only another door. You head into that door and enter
                into a library. You notice a shotgun placed in a rack on the wall. Do you leave it or take it?`,
    choices: [{
        id: 'takeit',
        description: 'Take the shotgun.',
        result: `Realizing that this house seems to be filled with all sorts of monsters, you decide to take the shotgun.
                When you remove, the rack it was sitting in raises and you hear what sounds like a lever moving. Not thinking much
                about it you head back into the other room. As you shut the library door it locks behind you, you try the door to the corridor
                but it is now locked as well. The ceiling begins to move and you realize that it is lowering and will crush you. There is nothing
                you can do. You are now a Jibble sandwich`,
        hp: -1000,
        ammo: 0,
    }, {
        id: 'leaveit',
        description: 'Leave the shotgun',
        result: `You decide to inspect the shotgun on the wall. You pick it up and notice the rack it is sitting in seems to be
                some sort of mechanism. You hear the sounds coming from behind the wall. This worries you and you decide to place
                the shotgun back in the rack and exit the room`,
        hp: 0,
        ammo: 0,
    }]
};

const quests = [
    gallery,
    hallway,
    library,
];

export default quests;