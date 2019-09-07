var app = new Vue({
    el: '#app',
    data: {
        sections: [
            {
                title: 'Busts',
                show: true,
                checks: [
                    {name: 'Compact > Scooter', checked: false},
                    {name: 'Warp > Bike', checked: false},
                    {name: 'Bike > Swerve', checked: false},
                    {name: 'Swerve > Warp', checked: false},
                    {name: 'Slick > Rocket', checked: false},
                    {name: 'Rocket > Turbo', checked: false},
                    {name: 'Turbo > Formula', checked: false},
                    {name: 'Formula > Slick', checked: false}
                ]
            },
            {
                title: 'Food',
                show: true,
                checks: [
                    {name: '3 Sushi', checked: false},
                    {name: '3 Hot Dog', checked: false},
                    {name: '3 Energy Drink', checked: false},
                    {name: '2 Tomato', checked: false}
                ]
            },
            {
                title: 'Patches',
                show: true,
                checks: [
                    {name: '10 Boost', checked: false},
                    {name: '10 Top Speed', checked: false},
                    {name: '10 Turn', checked: false},
                    {name: '10 Charge', checked: false},
                    {name: '10 Glide', checked: false},
                    {name: '10 Weight', checked: false},
                    {name: '10 Defense', checked: false}
                ]
            },
            {
                title: 'See Stadium',
                show: true,
                checks: [
                    {name: 'See Air Glider', checked: false},
                    {name: 'See High Jump', checked: false},
                    {name: 'See Kirby Melee 1', checked: false},
                    {name: 'See King Dedede', checked: false},
                    {name: 'See 4 Single Races', checked: false},
                    {},
                    {name: 'See Drag Race 2', checked: false},
                    {name: 'See Drag Race 3', checked: false},
                    {name: 'See Destruction Derby 2', checked: false}
                ]
            },
            {
                title: 'Kills',
                show: true,
                checks: [
                    {name: '10 Fireworks', checked: false, need: 10, have: 0},
                    {name: '3 Golden Spikes', checked: false, need: 3, have: 0},
                    {name: '3 Motion Bombs', checked: false, need: 3, have: 0},
                    {name: 'Hurt 3 CPUs in 1 Match', checked: false},
                    {name: 'Kill 5 CPUs', checked: false, need: 5, have: 0}
                ]
            }
        ]
    }
});
