/** Chunk was on web.js **/
/** chunk id: 321769, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => l
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk753450 = require("./753450.jsx");
let s = [{
    id: "strength",
    label: "Strength"
  }, {
    id: "dexterity",
    label: "Dexterity",
    isDisabled: true
  }, {
    id: "wisdom",
    label: "Wisdom"
  }, {
    id: "charisma",
    label: "Charisma"
  }],
  l = {
    title: "TagGroup",
    stories: [{
      name: "TagGroup",
      id: "tag-group",
      component: function(e) {
        let {
          selectionMode: t,
          removeable: n
        } = e, [l, c] = i.useState(s), u = i.useCallback(e => {
          c(l.filter(t => !e.has(t.id)))
        }, [l]), d = i.useCallback(() => {
          c(s)
        }, []);
        return (0, r.jsx)(a.Kqy, {
          gap: 24,
          children: (0, r.jsx)(o.Q, {
            label: "Categories",
            selectionMode: t,
            items: l,
            disabledKeys: ["dexterity"],
            onRemove: n ? u : true,
            children: n && (0, r.jsx)(a.zxk, {
              disabled: l.length === s.length,
              text: "Reset",
              onClick: d
            })
          })
        })
      },
      controls: {
        selectionMode: {
          label: "Selection Mode",
          type: "select",
          defaultValue: "multiple",
          options: [{
            label: "None",
            value: "none"
          }, {
            label: "Single",
            value: "single"
          }, {
            label: "Multiple",
            value: "multiple"
          }]
        },
        removeable: {
          label: "Removeable",
          type: "boolean",
          defaultValue: false
        }
      }
    }]
  }