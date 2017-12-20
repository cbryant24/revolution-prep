$('document').ready(build_courses)

function build_courses() {
    const course_elements = [];

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
                        enroll_url: courses.enrollUrl
                    }
                    course_elements.push(single_course)
                });
                add_to_dom()
            }
        })
    })()
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
        })

    }
    
}

function format_date(date) {
    let schedule = new Date(date).toString().match(/(^\w{3}).*\s(\d{2}:\d{2}).*\((\w+)/)
    if (schedule[2].match(/\d{2}/) >= 13) {
        schedule[2] = `${(schedule[2].match(/\d{2}/) - 12)}:${schedule[2].match(/\d{2}(?=$)/)}pm`
        return `${schedule[1]} ${schedule[2]} ${schedule[3]}`
    }
    return `${schedule[1]} ${schedule[2]}am ${schedule[3]}`

}