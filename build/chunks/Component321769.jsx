/** Chunk was on web.js **/
/** chunk id: 321769, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js");
let c = {
  title: "TagGroup",
  stories: [{
    name: "TagGroup",
    id: "tag-group",
    component: function(e) {
      let {
        selectionMode: t,
        removeable: n,
        layout: c
      } = e, u = (0, o.e7)([l.default], () => l.default.getCurrentUser()), d = i.useMemo(() => {
        var e;
        return [{
          id: "strength",
          label: "Strength",
          icon: s.z0B
        }, {
          id: "dexterity",
          label: "Dexterity",
          icon: {
            type: "role",
            color: "#ff44aa"
          }
        }, {
          id: "wisdom",
          label: "Wisdom",
          icon: {
            type: "avatar",
            src: null != (e = null == u ? true : u.getAvatarURL(true, 16)) ? e : ""
          }
        }, {
          id: "charisma",
          label: "Charisma"
        }]
      }, [u]), [f, _] = i.useState(d), p = i.useCallback(e => {
        _(f.filter(t => !e.has(t.id)))
      }, [f]), h = i.useCallback(() => {
        _(d)
      }, [d]), m = (0, r.jsx)(a.QSK, {
        label: "Categories",
        selectionMode: t,
        layout: c,
        items: f,
        onRemove: n ? p : true
      }), g = n && (0, r.jsx)(s.Button, {
        disabled: f.length === d.length,
        text: "Reset",
        onClick: h
      });
      return "inline" === c ? (0, r.jsxs)(s.Kqy, {
        gap: 24,
        children: [(0, r.jsx)("div", {
          style: {
            display: "flex",
            gap: 4
          },
          children: m
        }), g]
      }) : (0, r.jsxs)(s.Kqy, {
        gap: 24,
        children: [m, g]
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
      },
      layout: {
        label: "Layout",
        type: "select",
        defaultValue: "default",
        options: [{
          label: "Default",
          value: "default"
        }, {
          label: "Inline",
          value: "inline"
        }]
      }
    }
  }]
}