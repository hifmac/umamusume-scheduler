/**
 * @file texture-preview.js
 * @description Texture Preview view
 * @author hifmac(E328456 of the Frea server)
 * @copyright (c) 2021 hifmac
 * @license MIT-License
 */
'use strict';

import Adelite from 'https://hifmac.github.io/bgr-scene-player-renderer/js/sandica/adelite.js';

const RACE = [
    {
        name: "フェブラリーS",
        month: 2,
        week: 2,
        year: [ 3 ],
        factor: [ "パワー" ],
        ability: [ "冬ウマ娘" ],
        track: "ダート",
        distance: 1600,
        course: "東京",
    },
    {
        name: "大阪杯",
        month: 3,
        week: 2,
        year: [ 3 ],
        factor: [ "根性" ],
        ability: [ "根幹距離" ],
        track: "芝",
        distance: 2000,
        course: "大阪",
    },
    {
        name: "高松宮記念",
        month: 3,
        week: 2,
        year: [ 3 ],
        factor: [ "スピード" ],
        ability: [ "中京レース場" ],
        track: "芝",
        distance: 1200,
        course: "中京",
    },
    {
        name: "皐月賞",
        month: 4,
        week: 1,
        year: [ 2 ],
        factor: [ "パワー" ],
        ability: [ "中山レース場" ],
        track: "芝",
        distance: 2000,
        course: "中山",
    },
    {
        name: "桜花賞",
        month: 4,
        week: 1,
        year: [ 2 ],
        factor: [ "根性" ],
        ability: [ "阪神レース場" ],
        track: "芝",
        distance: 1600,
        course: "阪神",
    },
    {
        name: "天皇賞春",
        month: 4,
        week: 2,
        year: [ 3 ],
        factor: [ "スタミナ" ],
        ability: [ "春ウマ娘" ],
        track: "芝",
        distance: 3200,
        course: "京都",
    },
    {
        name: "ヴィクトリアマイル",
        month: 5,
        week: 1,
        year: [ 3 ],
        factor: [ "スピード", "パワー" ],
        ability: [ ],
        track: "芝",
        distance: 1600,
        course: "東京",
    },
    {
        name: "NHKマイルC",
        month: 5,
        week: 1,
        year: [ 2 ],
        factor: [ "スピード", "パワー" ],
        ability: [ ],
        track: "芝",
        distance: 1600,
        course: "東京",
    },
    {
        name: "日本ダービー",
        month: 5,
        week: 2,
        year: [ 2 ],
        factor: [ "根性" ],
        ability: [ "東京レース場" ],
        track: "芝",
        distance: 2400,
        course: "東京",
    },
    {
        name: "オークス",
        month: 5,
        week: 2,
        year: [ 2 ],
        factor: [ "スタミナ" ],
        ability: [ "東京レース場" ],
        track: "芝",
        distance: 2400,
        course: "東京",
    },
    {
        name: "安田記念",
        month: 6,
        week: 1,
        year: [ 2, 3 ],
        factor: [ "スピード" ],
        ability: [ "東京レース場" ],
        track: "芝",
        distance: 1600,
        course: "東京",
    },
    {
        name: "帝王賞",
        month: 6,
        week: 2,
        year: [ 3 ],
        factor: [ "スピード" ],
        ability: [ "東京レース場" ],
        track: "ダート",
        distance: 2000,
        course: "大井",
    },
    {
        name: "宝塚記念",
        month: 6,
        week: 2,
        year: [ 2, 3 ],
        factor: [ "根性" ],
        ability: [ "夏ウマ娘" ],
        track: "芝",
        distance: 2200,
        course: "阪神",
    },
    {
        name: "ジャパンダート",
        month: 7,
        week: 1,
        year: [ 2 ],
        factor: [ ],
        ability: [ "ダート" ],
        track: "ダート",
        distance: 2000,
        course: "大井",
    },
    {
        name: "スプリンターズS",
        month: 9,
        week: 2,
        year: [ 2, 3 ],
        factor: [ "スピード", "パワー" ],
        ability: [ "根幹距離" ],
        track: "芝",
        distance: 1200,
        course: "中山",
    },
    {
        name: "天皇賞秋",
        month: 10,
        week: 2,
        year: [ 2, 3 ],
        factor: [ "スピード" ],
        ability: [ "秋ウマ娘" ],
        track: "芝",
        distance: 2000,
        course: "東京",
    },
    {
        name: "菊花賞",
        month: 10,
        week: 2,
        year: [ 2 ],
        factor: [ "スタミナ" ],
        ability: [ "京都レース場" ],
        track: "芝",
        distance: 3000,
        course: "京都",
    },
    {
        name: "秋華賞",
        month: 10,
        week: 2,
        year: [ 2, 3 ],
        factor: [ "賢さ" ],
        ability: [ "京都レース場" ],
        track: "芝",
        distance: 2000,
        course: "京都",
    },
    {
        name: "JCBクラシック",
        month: 11,
        week: 1,
        year: [ 2, 3 ],
        factor: [ "スタミナ", "根性" ],
        ability: [ ],
        track: "ダート",
        distance: 2000,
        course: "大井",
    },
    {
        name: "JCBスプリント",
        month: 11,
        week: 1,
        year: [ 2, 3 ],
        factor: [ "パワー", "根性" ],
        ability: [ ],
        track: "ダート",
        distance: 1200,
        course: "大井",
    },
    {
        name: "JCBレディス",
        month: 11,
        week: 1,
        year: [ 2, 3 ],
        factor: [ "スピード", "根性" ],
        ability: [ ],
        track: "ダート",
        distance: 1800,
        course: "大井",
    },
    {
        name: "エリザベス女王",
        month: 11,
        week: 1,
        year: [ 2, 3 ],
        factor: [ "スタミナ" ],
        ability: [ "非根幹距離" ],
        track: "芝",
        distance: 2200,
        course: "京都",
    },
    {
        name: "ジャパンC",
        month: 11,
        week: 2,
        year: [ 2, 3 ],
        factor: [ "スタミナ" ],
        ability: [ "東京レース場" ],
        track: "芝",
        distance: 2400,
        course: "東京",
    },
    {
        name: "マイルCS",
        month: 11,
        week: 2,
        year: [ 2, 3 ],
        factor: [ "スピード" ],
        ability: [ "根幹距離" ],
        track: "芝",
        distance: 1600,
        course: "京都",
    },
    {
        name: "チャンピオンズC",
        month: 12,
        week: 1,
        year: [ 2, 3 ],
        factor: [ "パワー" ],
        ability: [ "中京レース場"  ],
        track: "ダート",
        distance: 1800,
        course: "中京",
    },
    {
        name: "朝日杯FS",
        month: 12,
        week: 1,
        year: [ 1 ],
        factor: [ "スピード", "根性" ],
        ability: [  ],
        track: "芝",
        distance: 1600,
        course: "阪神",
    },
    {
        name: "阪神ジュベナイ",
        month: 12,
        week: 1,
        year: [ 1 ],
        factor: [ "スピード", "パワー" ],
        ability: [  ],
        track: "芝",
        distance: 1600,
        course: "阪神",
    },
    {
        name: "東京大賞典",
        month: 12,
        week: 2,
        year: [ 3 ],
        factor: [  ],
        ability: [ "ダート" ],
        track: "ダート",
        distance: 2000,
        course: "大井",
    },
    {
        name: "有馬記念",
        month: 12,
        week: 2,
        year: [ 3 ],
        factor: [ "根性" ],
        ability: [ "中山レース場" ],
        track: "芝",
        distance: 2500,
        course: "中山",
    },
    {
        name: "ホープフルS",
        month: 12,
        week: 2,
        year: [ 1 ],
        factor: [ "スピード", "スタミナ" ],
        ability: [  ],
        track: "芝",
        distance: 2000,
        course: "中山",
    }
];

const RACE_GROUP_BY_MONTH = (() => {
    const month = [];
    while (month.length < 12) {
        month.push([ [ [], [], [] ], [ [], [], [] ] ]);
    }
    for (const race of RACE) {            
        for (const year of race.year) {
            month[race.month - 1][race.week - 1][year - 1].push(race);
        }
    }

    for (const m of month) {
        for (const w of m) {
            for (const races of w) {
                if (races.length) {
                    races.unshift({
                        name: "お休み",
                        month: m,
                        week: w,
                        year: [ 1, 2, 3 ],
                        factor: [],
                        ability: [],
                        track: null,
                        distance: null,
                        course: null,
                    });
                }
            }
        }
    }

    return month;    
})();



const template = {
    "div": {
        "div.title": {
            "once:class": "mx-auto col-7",
            "label": {
                "once:textContent": "ウマ娘スケジューラ"
            },
        },
        "div.header-left": {
            "label.col-1": {
                "once:textContent": "/"
            },
            "label#label-junior": {
                "once:class": "col-2 mr-2 text-center",
                "once:textContent": "1年目"
            },
            "label#label-classic": {
                "once:class": "col-2 mr-2 text-center",
                "once:textContent": "2年目"
            },
            "label#label-senior": {
                "once:class": "col-2 mr-2 text-center",
                "once:textContent": "3年目"
            },
        },
        "div.border": {
            "forEach:month": "{{ MONTH }}",
            "div.row": {
                "forEach:week": "{{ WEEK }}",
                "if": "{{ hasGroup(RACE_GROUP_BY_MONTH[sub(month, 1)][sub(week, 1)]) }}",
                "label#left": {
                    "once:class": "col-1 text-right",
                    "once:textContent": "{{ month }}月{{ WEEK_TEXT[sub(week, 1)] }}"
                },
                "div": {
                    "forEach:group": "{{ RACE_GROUP_BY_MONTH[sub(month, 1)][sub(week, 1)] }}",
                    "once:class": "col-2",
                    "select": {
                        "if": "{{ group.length }}",
                        "bind:class": "w-100 mr-2 {{ getRaceClass(getAttribute('value')) }}",
                        "once:name": "race",
                        "option": {
                            "forEach:race": "{{ group }}",
                            "once:value": "{{ race.name }}",
                            "once:textContent": "{{ getRaceName(race) }}",
                        },
                        "on:change": "{{ onUpdated(month, week, getAttribute('value')) }}"
                    },    
                },
                "label#right": {
                    "once:class": "col-1 text-left",
                    "once:textContent": "{{ month }}月{{ WEEK_TEXT[sub(week, 1)] }}"
                },
            }
        },
        "div.summary": {
            "div.ml-2": {
                "forEach:summary": "{{ summarize() }}",
                "bind:textContent": "{{ summary }}"
            }
        }
    }
};

/** @type {import('../../../bgr-scene-player/renderer/docs/js/sandica/adelite.js').default} */
const adelite = new Adelite('#app', template);

const data = {
    MONTH: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
    WEEK: [ 1, 2 ],
    WEEK_TEXT: [ '前半', '後半' ],
    RACE_GROUP_BY_MONTH,

    hasGroup(group) {
        let numGroup = 0;
        for (const month of group) {
            numGroup += month.length;
        }
        return 0 < numGroup;
    },

    getRaceName(race) {
        const title = [];
        if (race.course && race.distance && race.track) {
            title.push(`${race.course} ${race.track} ${race.distance}m`);
        }
        for (const factor of race.factor) {
            title.push(factor);
        }       
        for (const ability of race.ability) {
            title.push(ability + '〇');
        }
        if (title.length) {
            return `${race.name}(${ title.join('、') })`;
        }
        return race.name;
    },

    onUpdated(month, week, race) {
        adelite.update();
    },

    getRaceClass(raceName) {
        for (const race of RACE) {
            if (race.name == raceName) {
                switch (race.track) {
                case '芝':
                    return "bg-success";
                case 'ダート':
                    return "bg-warning";
                }
            }
        }
        return 'bg-transparent';
    },

    summarize() {
        const factors = {
            "スピード": 0,
            "パワー": 0,
            "スタミナ": 0,
            "根性": 0,
            "賢さ": 0,
        };
        const abilities = new Set();
        for (const raceSelect of document.getElementsByName('race')) {
            for (const race of RACE) {
                if (race.name === raceSelect.value) {
                    for (const factor of race.factor) {
                        factors[factor] += 1;
                    }       
                    for (const ability of race.ability) {
                        abilities.add(ability)
                    }       
                }
            }
        }

        let summary = [];
        for (const f in factors) {
            summary.push(f + 'x' + factors[f]);
        }
        return [
            '因子：' + summary.join(', '),
            '特能：' + Array.from(abilities).sort().join('〇, ') + (abilities.size ? '〇' : '')
        ];
    }
};

window.onload = () => {
    adelite.show(data);
};
