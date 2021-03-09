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
    },
    {
        name: "大阪杯　",
        month: 3,
        week: 2,
        year: [ 3 ],
        factor: [ "根性" ],
        ability: [ "根幹距離" ],
    },
    {
        name: "高松宮記念",
        month: 3,
        week: 2,
        year: [ 3 ],
        factor: [ "スピード" ],
        ability: [ "中京レース場" ],
    },
    {
        name: "皐月賞",
        month: 4,
        week: 1,
        year: [ 2 ],
        factor: [ "パワー" ],
        ability: [ "中山レース場" ],
    },
    {
        name: "桜花賞",
        month: 4,
        week: 1,
        year: [ 2 ],
        factor: [ "根性" ],
        ability: [ "阪神レース場" ],
    },
    {
        name: "天皇賞春",
        month: 4,
        week: 2,
        year: [ 3 ],
        factor: [ "スタミナ" ],
        ability: [ "春ウマ娘" ],
    },
    {
        name: "ヴィクトリアマイル",
        month: 5,
        week: 1,
        year: [ 3 ],
        factor: [ "スピード", "パワー" ],
        ability: [ ],
    },
    {
        name: "NHKマイルC",
        month: 5,
        week: 1,
        year: [ 2 ],
        factor: [ "スピード", "パワー" ],
        ability: [ ],
    },
    {
        name: "日本ダービー",
        month: 5,
        week: 2,
        year: [ 2 ],
        factor: [ "根性" ],
        ability: [ "東京レース場" ],
    },
    {
        name: "オークス",
        month: 5,
        week: 2,
        year: [ 2 ],
        factor: [ "スタミナ" ],
        ability: [ "東京レース場" ],
    },
    {
        name: "安田記念",
        month: 6,
        week: 1,
        year: [ 2, 3 ],
        factor: [ "スピード" ],
        ability: [ "東京レース場" ],
    },
    {
        name: "帝王賞",
        month: 6,
        week: 2,
        year: [ 3 ],
        factor: [ "スピード" ],
        ability: [ "東京レース場" ],
    },
    {
        name: "宝塚記念",
        month: 6,
        week: 2,
        year: [ 2, 3 ],
        factor: [ "根性" ],
        ability: [ "夏ウマ娘" ],
    },
    {
        name: "ジャパンダート",
        month: 7,
        week: 1,
        year: [ 2 ],
        factor: [ ],
        ability: [ "ダート" ],
    },
    {
        name: "スプリンターズS",
        month: 9,
        week: 2,
        year: [ 2, 3 ],
        factor: [ "スピード", "パワー" ],
        ability: [ "根幹距離" ],
    },
    {
        name: "天皇賞秋",
        month: 10,
        week: 2,
        year: [ 3 ],
        factor: [ "スピード" ],
        ability: [ "秋ウマ娘" ],
    },
    {
        name: "菊花賞",
        month: 10,
        week: 2,
        year: [ 2 ],
        factor: [ "スタミナ" ],
        ability: [ "京都レース場" ],
    },
    {
        name: "秋華賞",
        month: 10,
        week: 2,
        year: [ 3 ],
        factor: [ "賢さ" ],
        ability: [ "京都レース場" ],
    },
    {
        name: "JCBクラシック",
        month: 11,
        week: 1,
        year: [ 2, 3 ],
        factor: [ "スタミナ", "根性" ],
        ability: [ ],
    },
    {
        name: "JCBスプリント",
        month: 11,
        week: 1,
        year: [ 2, 3 ],
        factor: [ "パワー", "根性" ],
        ability: [ ],
    },
    {
        name: "JCBレディス",
        month: 11,
        week: 1,
        year: [ 2, 3 ],
        factor: [ "スピード", "根性" ],
        ability: [ ],
    },
    {
        name: "エリザベス女王",
        month: 11,
        week: 1,
        year: [ 2, 3 ],
        factor: [ "スタミナ" ],
        ability: [ "非根幹距離" ],
    },
    {
        name: "ジャパンC",
        month: 11,
        week: 2,
        year: [ 2, 3 ],
        factor: [ "スタミナ" ],
        ability: [ "東京レース場" ],
    },
    {
        name: "マイルCS",
        month: 11,
        week: 2,
        year: [ 2, 3 ],
        factor: [ "スピード" ],
        ability: [ "根幹距離" ],
    },
    {
        name: "チャンピオンズ",
        month: 12,
        week: 1,
        year: [ 2, 3 ],
        factor: [ "パワー" ],
        ability: [ "中京レース場"  ],
    },
    {
        name: "朝日杯FS",
        month: 12,
        week: 1,
        year: [ 1 ],
        factor: [ "スピード", "根性" ],
        ability: [  ],
    },
    {
        name: "阪神ジュベナイ",
        month: 12,
        week: 1,
        year: [ 1 ],
        factor: [ "スピード", "パワー" ],
        ability: [  ],
    },
    {
        name: "東京大賞典",
        month: 12,
        week: 2,
        year: [ 3 ],
        factor: [  ],
        ability: [ "ダート" ],
    },
    {
        name: "有馬記念",
        month: 12,
        week: 2,
        year: [ 3 ],
        factor: [ "根性" ],
        ability: [ "中山レース場" ],
    },
    {
        name: "ホープフルS",
        month: 12,
        week: 2,
        year: [ 1 ],
        factor: [ "スピード", "スタミナ" ],
        ability: [  ],
    }
];

const template = {
    "div": {
        "div.title": {
            "once:class": "mx-auto col-7",
            "label": {
                "once:textContent": "ウマ娘スケジューラ"
            },
        },
        "div.header": {
            "label.col-1": {
                "once:textContent": "/"
            },
            "label#label-junior": {
                "once:class": "col-2 center",
                "once:textContent": "1年目"
            },
            "label#label-classic": {
                "once:class": "col-2 mx-auto",
                "once:textContent": "2年目"
            },
            "label#label-senior": {
                "once:class": "col-2 center",
                "once:textContent": "3年目"
            },
        },
        "div.table": {
            "forEach:month": "{{ MONTH }}",
            "div": {
                "forEach:week": "{{ WEEK }}",
                "if": "{{ hasGroup(getRaceGroupByMonth(month, week)) }}",
                "label.col-1": {
                    "once:textContent": "{{ month }}月{{ WEEK_TEXT[sub(week, 1)] }}"
                },
                "select.col-2": {
                    "forEach:group": "{{ getRaceGroupByMonth(month, week) }}",
                    "once:name": "race",
                    "option": {
                        "forEach:race": "{{ group }}",
                        "once:value": "{{ race.name }}",
                        "once:textContent": "{{ getRaceName(race) }}",
                    },
                    "on:change": "{{ onUpdated(month, week, getAttribute('value')) }}"
                }
            }
        },
        "div.summary": {
            "bind:textContent": "{{ summarize() }}"
        }
    }
};

/** @type {import('../../../bgr-scene-player/renderer/docs/js/sandica/adelite.js').default} */
const adelite = new Adelite('#app', template);

const data = {
    MONTH: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
    WEEK: [ 1, 2 ],
    WEEK_TEXT: [ '前半', '後半' ],
    hasGroup(group) {
        let numGroup = 0;
        for (const month of group) {
            numGroup += month.length;
        }
        return 0 < numGroup;
    },
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
    },
    getRaceName(race) {
        const title = [];
        for (const factor of race.factor) {
            title.push(factor);
        }       
        for (const ability of race.ability) {
            title.push(ability + '〇');
        }   
        return `${race.name}(${ title.join('\n') })`;
    },
    onUpdated(month, week, race) {
        adelite.update();
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
        return '因子：' + summary.join(', ') + ' / 特能：' + Array.from(abilities).join('〇, ') + '〇';
    }
};

window.onload = () => {
    adelite.show(data);
};
