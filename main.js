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
            }
        ]
    }
});
