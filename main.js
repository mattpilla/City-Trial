var app = new Vue({
    el: '#app',
    data: {
        sections: [
            {
                title: 'Busts',
                show: true,
                checks: [
                    'Compact > Scooter',
                    'Warp > Bike',
                    'Bike > Swerve',
                    'Swerve > Warp',
                    'Slick > Rocket',
                    'Rocket > Turbo',
                    'Turbo > Formula',
                    'Formula > Slick'
                ]
            }
        ]
    },
    mounted() {
       //
    },
    watch: {
        //
    },
    methods: {
        //
    }
});
