module.exports = { // meeting
    PROJECT_COLOR: '#1560F7',
    NAV_COLOR: '#ffffff',
    NAV_BG: '#1560F7',

    // setup
    SETUP_CONTENT_ITEMS: [
        { title: '关于我们', key: 'SETUP_CONTENT_ABOUT' },
        { title: '用户注册使用协议', key: 'SETUP_YS' }
    ],

    // 用户 
    USER_FIELDS: [
        { mark: 'sex', title: '性别', type: 'select', selectOptions: ['男', '女'], must: true },
        { mark: 'text', type: 'text', title: '部门', must: true } 
    ],


    NEWS_NAME: '资讯',
    NEWS_CATE: [
        { id: 1, title: '公告通知' },
        { id: 2, title: '使用规则' },
        { id: 3, title: '服务介绍' }
    ],
    NEWS_FIELDS: [
        { mark: 'desc', type: 'textarea', title: '简介', must: true, min: 2, max: 200 },
        { mark: 'content', title: '详细内容', type: 'content', must: true },
        { mark: 'cover', type: 'image', title: '封面图', must: true, min: 1, max: 1 },
    ],


    MEET_NAME: '预约',
    MEET_CATE: [
        { id: 1, title: '会议室' },
        { id: 2, title: '多功能厅' },
        { id: 3, title: '洽谈室' },
        { id: 4, title: '报告厅' },
        { id: 5, title: '贵宾室' },
        { id: 6, title: '路演厅' },
    ],
    MEET_FIELDS: [
        { mark: 'cover', title: '封面图', type: 'image', min: 1, max: 1, must: true },
        {
            mark: 'time', title: '预约时段设置', type: 'rows', ext: { titleName: '时段', maxCnt: 15, minCnt: 1 },
            def: [{ title: '8点~12点' }, { title: '13点~18点' }],
            must: false
        },
        { mark: 'desc', title: '预约须知', type: 'content', must: true },
    ],
    MEET_JOIN_FIELDS: [
        { mark: 'name', type: 'text', title: '姓名', must: true, max: 30 },
        { mark: 'phone', type: 'mobile', title: '手机', must: true, edit: false }
    ],


}