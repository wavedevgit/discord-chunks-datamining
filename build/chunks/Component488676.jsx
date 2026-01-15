/** Chunk was on web.js **/
/** chunk id: 488676, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => l
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk159691 = require("./159691.js");
let l = {
  title: "RadioGroup",
  stories: [{
    id: "radiogroup",
    name: "RadioGroup",
    component: function(e) {
      let {
        disabled: t,
        optionCount: n,
        label: l,
        optionLabel: c,
        description: u,
        showIcons: d,
        withMixedDisabledOptions: f
      } = e, [p, _] = i.useState("option1"), h = i.useMemo(() => [{
        name: null != c ? "".concat(c, " 1") : "Option 1",
        value: "option1",
        desc: null == u || "" === u ? true : u,
        leadingIcon: d ? a.CircleInformationIcon : true,
        disabled: !f && true
      }, {
        name: null != c ? "".concat(c, " 2") : "Option 2",
        value: "option2",
        desc: null == u || "" === u ? true : u,
        leadingIcon: d ? a.CircleInformationIcon : true,
        disabled: !!f || true
      }, {
        name: null != c ? "".concat(c, " 3") : "Option 3",
        value: "option3",
        desc: null == u || "" === u ? true : u,
        leadingIcon: d ? a.CircleInformationIcon : true,
        disabled: !f && true
      }, {
        name: null != c ? "".concat(c, " 4") : "Option 4",
        value: "option4",
        desc: null == u || "" === u ? true : u,
        leadingIcon: d ? a.CircleInformationIcon : true,
        disabled: !!f || true
      }, {
        name: null != c ? "".concat(c, " 5") : "Option 5",
        value: "option5",
        desc: null == u || "" === u ? true : u,
        leadingIcon: d ? a.CircleInformationIcon : true,
        disabled: !f && true
      }].slice(0, Math.max(1, Math.min(5, n))), [n, c, u, d, f]), m = i.useCallback(e => {
        _(e)
      }, []), g = i.useCallback(() => {
        h.length > 0 && _(h[0].value)
      }, [h]), E = i.useCallback(() => {
        h.length > 0 && _(h[h.length - 1].value)
      }, [h]), b = i.useCallback(() => {
        _(true)
      }, []);
      return (0, r.jsxs)(o.Kqy, {
        direction: "vertical",
        gap: "md",
        children: [(0, r.jsx)(s.Eep, {
          value: p,
          label: l,
          onChange: m,
          options: h,
          disabled: t
        }), (0, r.jsxs)(o.xvT, {
          variant: "text-sm/normal",
          children: ["Current selection: ", "string" == typeof p && "" !== p ? p : "None"]
        }), (0, r.jsxs)(o.Kqy, {
          direction: "horizontal",
          gap: "sm",
          children: [(0, r.jsx)(s.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Select First",
            onClick: g,
            disabled: t || 0 === h.length
          }), (0, r.jsx)(s.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Select Last",
            onClick: E,
            disabled: t || 0 === h.length
          }), (0, r.jsx)(s.zxk, {
            variant: "primary",
            size: "sm",
            text: "Clear",
            onClick: b,
            disabled: t
          })]
        })]
      })
    },
    controls: {
      label: {
        type: "text",
        label: "Label",
        defaultValue: "Mana Radio Group"
      },
      disabled: {
        type: "boolean",
        label: "Disabled",
        defaultValue: false
      },
      optionCount: {
        type: "select",
        label: "Number of Options",
        options: [{
          label: "1",
          value: 1
        }, {
          label: "2",
          value: 2
        }, {
          label: "3",
          value: 3
        }, {
          label: "4",
          value: 4
        }, {
          label: "5",
          value: 5
        }],
        defaultValue: 3
      },
      optionLabel: {
        type: "text",
        label: "Option Label",
        defaultValue: "Option"
      },
      description: {
        type: "text",
        label: "Description",
        defaultValue: ""
      },
      showIcons: {
        type: "boolean",
        label: "Show Icons",
        defaultValue: false
      },
      withMixedDisabledOptions: {
        type: "boolean",
        label: "Mixed Disabled Options",
        defaultValue: false
      }
    }
  }]
}