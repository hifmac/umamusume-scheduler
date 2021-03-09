/**
 * @file texture-preview.js
 * @description Texture Preview view
 * @author hifmac(E328456 of the Frea server)
 * @copyright (c) 2021 hifmac
 * @license MIT-License
 */
'use strict';

import { printStack } from 'https://hifmac.github.io/bgr-scene-player-renderer/js/blanc/lisette.js';

import Adelite from 'https://hifmac.github.io/bgr-scene-player-renderer/js/sandica/adelite.js';

const RACE = [
    {
        name: "フェブラリーS",
        month: 2,
        week: 2,
        year: [ 3 ]
    },
    {
        name: "大阪杯　",
        month: 3,
        week: 2,
        year: [ 3 ]
    },
    {
        name: "高松宮杯",
        month: 3,
        week: 2,
        year: [ 3 ]
    },
    {
        name: "皐月賞",
        month: 4,
        week: 1,
        year: [ 2 ]
    },
    {
        name: "桜花賞",
        month: 4,
        week: 1,
        year: [ 2 ]
    },
    {
        name: "天皇賞春",
        month: 4,
        week: 2,
        year: [ 3 ]
    },
    {
        name: "ヴィクトリア",
        month: 5,
        week: 1,
        year: [ 3 ]
    },
    {
        name: "NHKマイルC",
        month: 5,
        week: 1,
        year: [ 2 ]
    },
    {
        name: "日本ダービー",
        month: 5,
        week: 2,
        year: [ 2 ]
    },
    {
        name: "オークス",
        month: 5,
        week: 2,
        year: [ 2 ]
    },
    {
        name: "安田記念",
        month: 6,
        week: 1,
        year: [ 2, 3 ]
    },
    {
        name: "帝王賞",
        month: 6,
        week: 2,
        year: [ 3 ]
    },
    {
        name: "宝塚記念",
        month: 6,
        week: 2,
        year: [ 2, 3 ]
    },
    {
        name: "ジャパンダート",
        month: 7,
        week: 1,
        year: [ 2 ]
    },
    {
        name: "スプリンターズ",
        month: 9,
        week: 2,
        year: [ 2, 3 ]
    },
    {
        name: "天皇賞秋",
        month: 10,
        week: 2,
        year: [ 3 ]
    },
    {
        name: "菊花賞",
        month: 10,
        week: 2,
        year: [ 2 ]
    },
    {
        name: "秋華賞",
        month: 10,
        week: 2,
        year: [ 3 ]
    },
    {
        name: "JCBクラシック",
        month: 11,
        week: 1,
        year: [ 2, 3 ]
    },
    {
        name: "JCBスプリント",
        month: 11,
        week: 1,
        year: [ 2, 3 ]
    },
    {
        name: "JCBレディス",
        month: 11,
        week: 1,
        year: [ 2, 3 ]
    },
    {
        name: "エリザベス女王",
        month: 11,
        week: 1,
        year: [ 2, 3 ]
    },
    {
        name: "ジャパンC",
        month: 11,
        week: 2,
        year: [ 2, 3 ]
    },
    {
        name: "マイルCS",
        month: 11,
        week: 2,
        year: [ 2, 3 ]
    },
    {
        name: "チャンピオンズ",
        month: 12,
        week: 1,
        year: [ 2, 3 ]
    },
    {
        name: "朝日杯FS",
        month: 12,
        week: 1,
        year: [ 1 ]
    },
    {
        name: "阪神ジュベナイ",
        month: 12,
        week: 1,
        year: [ 1 ]
    },
    {
        name: "東京大賞典",
        month: 12,
        week: 2,
        year: [ 3 ]
    },
    {
        name: "有馬記念",
        month: 12,
        week: 2,
        year: [ 3 ]
    },
    {
        name: "ホープフルS",
        month: 12,
        week: 2,
        year: [ 1 ]
    }
];

const template = {
    "div": {
        "div": {
            "once:class": "center-block",
            "label.mx-auto": {
                "once:textContent": "ウマ娘スケジューラ"
            },
        },
        "div.header": {
            "label.col-1": {
                "once:textContent": "/"
            },
            "label#label-junior": {
                "once:class": "col-3 center",
                "once:textContent": "1年目"
            },
            "label#label-classic": {
                "once:class": "col-3 mx-auto",
                "once:textContent": "2年目"
            },
            "label#label-senior": {
                "once:class": "col-3 center",
                "once:textContent": "3年目"
            },
        },
        "div.table": {
            "forEach:month": "{{ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] }}",
            "div": {
                "forEach:week": "{{ [ 1, 2 ] }}",
                "label.col-1": {
                    "once:textContent": "{{ month }}月{{ WEEK_TEXT[sub(week, 1)] }}"
                },
                "select.col-3": {
                    "forEach:group": "{{ getRaceGroupByMonth(month, week) }}",
                    "option": {
                        "forEach:race": "{{ group }}",
                        "once:value": "{{ race.name }}",
                        "once:textContent": "{{ race.name }}"
                    }
                }
            }
        }
    }
};

/** @type {import('../../../bgr-scene-player/renderer/docs/js/sandica/adelite.js').default} */
const adelite = new Adelite('#app', template);

const data = {
    WEEK_TEXT: [ '前半', '後半' ],
    getRaceGroupByMonth(month, week) {
        const ret = [];
        while (ret.length < 3) {
            ret.push([])
        }
        for (const race of RACE) {
            if (race.month === month && race.week == week) {
                for (const year of race.year) {
                    ret[year - 1].push(race);
                }
            }
        }
        return ret
    }
};

window.onload = () => {
    adelite.show(data);
};
