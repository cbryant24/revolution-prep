$('document').ready(build_courses)

function build_courses() {
    const course_elements = [];

    //SECTION IS USED FOR THE AJAX REQUEST FOR NODE SERVER ON REVPREP.CHRISBRYANTDEV.COM 
    (() => {
        $.ajax({
            url: '/get-courses',
            type: 'get',
            dataType: 'json',
            headers: {
                'Content-Type': 'application/json'
            },
            success: (courses) => {
                courses.forEach(course => {
                    let single_course = {
                        title: course.title,
                        date: new Date(course.startsAt).toString().match(/\s(\w{3}\s\d{2})/)[1],
                        schedule: format_date(course.startsAt),
                        enroll_url: course.enrollUrl
                    }
                    course_elements.push(single_course)
                });
                add_to_dom()
            }
        })
    })()

    // courses.forEach(course => {
    //     let single_course = {
    //         title: course.title,
    //         date: new Date(course.startsAt).toString().match(/\s(\w{3}\s\d{2})/)[1],
    //         schedule: format_date(course.startsAt),
    //         enroll_url: course.enrollUrl
    //     }
    //     course_elements.push(single_course)
    // });

    add_to_dom()

    function add_to_dom() {
        course_elements.forEach( course => {
            const $course_div = $('<div>', {
                class: 'single-course'
            })
            const $course_img = $('<img>', {
                src: 'img/sat_prep.png'
            })
            const $course_title = $('<h3>', {
                text: `Course: ${course.title}`,
                class: 'course-title'
            })
            const $course_date = $('<p>', {
                text: `Date: ${course.date}`,
                class: 'course-date'
            })
            const $course_schedule = $('<p>', {
                text: `Class Schedule: ${course.schedule}`,
                class: 'course-schedule'
            })
            const $enroll_button = $('<button>', {
                text: 'Enroll Now',
                class: 'enroll-button'
            })


            $course_div.append($course_img);
            $course_div.append($course_date);
            $course_div.append($course_schedule);
            $course_div.append($course_title);
            $course_div.append($enroll_button);
            $('.all-courses').append($course_div);
            $('.enroll-button').on('click', () => {
                window.location.replace(course.enroll_url)
            })
        })

    }
    
}

function format_date(date) {
    let day_of_week = new Date(date).toString().match(/^\w{3}/)[0]
    let time_zone = new Date(date).toLocaleTimeString('en-us',{timeZoneName:'short'}).match(/[a-zA-Z\-]+\d*(?=$)/)[0]
    let time = new Date(date).toLocaleTimeString().match(/(\d{1,2}:\d{2})/)[0]
    let am_pm = new Date(date).toLocaleTimeString().match(/\w{2}(?=$)/)[0]

    return `${day_of_week} ${time}${am_pm} ${time_zone} `
}





const courses = [{
    "id": 2109,
    "availableForSale": true,
    "availableForSaleError": null,
    "createdAt": "2017-08-31T00:31:36-07:00",
    "deliveredDuration": 0,
    "duration": 720,
    "endsAt": "2018-01-21T13:00:00-08:00",
    "enrollUrl": "//example.com/",
    "enrollmentCap": 4,
    "enrollmentsCount": 2,
    "firstSessionAt": null,
    "gradeLevel": null,
    "lastSessionAt": null,
    "legacyId": 42790,
    "name": null,
    "nextStartsAt": "2017-12-03T13:00:00-08:00",
    "notes": "",
    "parentUpdateLastSentAt": null,
    "possibleEvents": [
        "unpublish",
        "cancel"
    ],
    "provisionedDuration": 0,
    "remainingProvisionedDuration": 0,
    "reservationEndsAt": null,
    "restrictByLeadSource": false,
    "schedule": [
        {
            "name": "Class",
            "count": 6,
            "days": [
                "Sunday at 1:00PM"
            ],
            "timeZone": "PST"
        }
    ],
    "startingEpisodeNumber": null,
    "startsAt": "2017-12-03T13:00:00-08:00",
    "title": "SAT Yellow Semi-Private Tutoring",
    "type": "Course",
    "unscheduledDuration": -720,
    "updatedAt": "2017-10-16T09:18:55-07:00",
    "status": "published",
    "requiresParentUpdate": true,
    "staffed": true
},{
    "id": 13064,
    "availableForSale": true,
    "availableForSaleError": null,
    "createdAt": "2017-08-31T23:40:09-07:00",
    "deliveredDuration": 0,
    "duration": 720,
    "endsAt": "2018-01-07T16:00:00-08:00",
    "enrollUrl": "//example.com/",
    "enrollmentCap": 4,
    "enrollmentsCount": 3,
    "firstSessionAt": null,
    "gradeLevel": null,
    "lastSessionAt": null,
    "legacyId": 42848,
    "name": null,
    "nextStartsAt": "2017-12-03T16:00:00-08:00",
    "notes": "",
    "parentUpdateLastSentAt": null,
    "possibleEvents": [
        "unpublish",
        "cancel"
    ],
    "provisionedDuration": 0,
    "remainingProvisionedDuration": 0,
    "reservationEndsAt": null,
    "restrictByLeadSource": false,
    "schedule": [
        {
            "name": "Class",
            "count": 6,
            "days": [
                "Sunday at 4:00PM",
                "Saturday at 4:00PM"
            ],
            "timeZone": "PST"
        }
    ],
    "startingEpisodeNumber": null,
    "startsAt": "2017-12-03T16:00:00-08:00",
    "title": "SAT Yellow Semi-Private Tutoring",
    "type": "Course",
    "unscheduledDuration": -720,
    "updatedAt": "2017-10-16T09:19:31-07:00",
    "status": "published",
    "requiresParentUpdate": true,
    "staffed": true
},{
    "id": 13837,
    "availableForSale": true,
    "availableForSaleError": null,
    "createdAt": "2017-10-11T15:14:29-07:00",
    "deliveredDuration": 0,
    "duration": 720,
    "endsAt": "2018-01-07T16:00:00-08:00",
    "enrollUrl": "//example.com/",
    "enrollmentCap": 4,
    "enrollmentsCount": 2,
    "firstSessionAt": null,
    "gradeLevel": null,
    "lastSessionAt": null,
    "legacyId": null,
    "name": null,
    "nextStartsAt": "2017-12-03T16:00:00-08:00",
    "notes": null,
    "parentUpdateLastSentAt": null,
    "possibleEvents": [
        "unpublish",
        "cancel"
    ],
    "provisionedDuration": 0,
    "remainingProvisionedDuration": 0,
    "reservationEndsAt": null,
    "restrictByLeadSource": false,
    "schedule": [
        {
            "name": "Class",
            "count": 6,
            "days": [
                "Sunday at 4:00PM",
                "Saturday at 4:00PM"
            ],
            "timeZone": "PST"
        }
    ],
    "startingEpisodeNumber": null,
    "startsAt": "2017-12-03T16:00:00-08:00",
    "title": "SAT Yellow Semi-Private Tutoring",
    "type": "Course",
    "unscheduledDuration": -720,
    "updatedAt": "2017-11-07T16:39:05-08:00",
    "status": "published",
    "requiresParentUpdate": true,
    "staffed": true
},{
    "id": 13902,
    "availableForSale": true,
    "availableForSaleError": null,
    "createdAt": "2017-10-16T15:28:06-07:00",
    "deliveredDuration": 0,
    "duration": 1560,
    "endsAt": "2018-03-04T08:00:00-08:00",
    "enrollUrl": "//example.com/",
    "enrollmentCap": 50,
    "enrollmentsCount": 0,
    "firstSessionAt": null,
    "gradeLevel": null,
    "lastSessionAt": null,
    "legacyId": null,
    "name": null,
    "nextStartsAt": "2018-01-21T08:00:00-08:00",
    "notes": "Semi-Private Course Test - School-specific courses.",
    "parentUpdateLastSentAt": null,
    "possibleEvents": [
        "unpublish",
        "cancel"
    ],
    "provisionedDuration": 0,
    "remainingProvisionedDuration": 0,
    "reservationEndsAt": null,
    "restrictByLeadSource": true,
    "schedule": [
        {
            "name": "Class",
            "count": 13,
            "days": [
                "Saturday at 8:00AM",
                "Sunday at 8:00AM"
            ],
            "timeZone": "PST"
        }
    ],
    "startingEpisodeNumber": null,
    "startsAt": "2018-01-21T08:00:00-08:00",
    "title": "SAT Semi-Private Tutoring",
    "type": "Course",
    "unscheduledDuration": -1560,
    "updatedAt": "2017-10-17T11:56:23-07:00",
    "status": "published",
    "requiresParentUpdate": true,
    "staffed": false
},{
    "id": 13903,
    "availableForSale": true,
    "availableForSaleError": null,
    "createdAt": "2017-10-16T15:32:54-07:00",
    "deliveredDuration": 0,
    "duration": 1560,
    "endsAt": "2018-03-07T16:00:00-08:00",
    "enrollUrl": "//example.com/",
    "enrollmentCap": 50,
    "enrollmentsCount": 0,
    "firstSessionAt": null,
    "gradeLevel": null,
    "lastSessionAt": null,
    "legacyId": null,
    "name": null,
    "nextStartsAt": "2018-01-24T16:00:00-08:00",
    "notes": "School-specific Semi-Private course test",
    "parentUpdateLastSentAt": null,
    "possibleEvents": [
        "unpublish",
        "cancel"
    ],
    "provisionedDuration": 0,
    "remainingProvisionedDuration": 0,
    "reservationEndsAt": null,
    "restrictByLeadSource": true,
    "schedule": [
        {
            "name": "Class",
            "count": 13,
            "days": [
                "Wednesday at 4:00PM",
                "Sunday at 12:00PM"
            ],
            "timeZone": "PST"
        }
    ],
    "startingEpisodeNumber": null,
    "startsAt": "2018-01-24T16:00:00-08:00",
    "title": "SAT Semi-Private Tutoring",
    "type": "Course",
    "unscheduledDuration": -1560,
    "updatedAt": "2017-10-17T11:57:57-07:00",
    "status": "published",
    "requiresParentUpdate": true,
    "staffed": false
},{
    "id": 13906,
    "availableForSale": true,
    "availableForSaleError": null,
    "createdAt": "2017-10-16T16:03:10-07:00",
    "deliveredDuration": 0,
    "duration": 1560,
    "endsAt": "2018-03-04T08:00:00-08:00",
    "enrollUrl": "//example.com/",
    "enrollmentCap": 50,
    "enrollmentsCount": 0,
    "firstSessionAt": null,
    "gradeLevel": null,
    "lastSessionAt": null,
    "legacyId": null,
    "name": null,
    "nextStartsAt": "2018-01-21T08:00:00-08:00",
    "notes": "School-specific semi-private tutoring course",
    "parentUpdateLastSentAt": null,
    "possibleEvents": [
        "unpublish",
        "cancel"
    ],
    "provisionedDuration": 0,
    "remainingProvisionedDuration": 0,
    "reservationEndsAt": null,
    "restrictByLeadSource": true,
    "schedule": [
        {
            "name": "Class",
            "count": 13,
            "days": [
                "Sunday at 8:00AM",
                "Saturday at 8:00AM"
            ],
            "timeZone": "PST"
        }
    ],
    "startingEpisodeNumber": null,
    "startsAt": "2018-01-21T08:00:00-08:00",
    "title": "SAT Semi-Private Tutoring",
    "type": "Course",
    "unscheduledDuration": -1560,
    "updatedAt": "2017-10-17T12:40:07-07:00",
    "status": "published",
    "requiresParentUpdate": true,
    "staffed": false
}]