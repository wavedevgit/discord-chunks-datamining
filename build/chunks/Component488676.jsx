/** Chunk was on web.js **/
/** chunk id: 488676, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk30717 = require("./30717.jsx"),
  Chunk895070 = require("./895070.jsx"),
  Chunk632140 = require("./632140.jsx"),
  Chunk125455 = require("./125455.jsx"),
  Chunk966649 = require("./966649.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk538534 = require("./538534.jsx"),
  Chunk159691 = require("./159691.js");
let _ = {
  title: "RadioGroup",
  stories: [{
    id: "radiogroup",
    name: "RadioGroup",
    component: function(e) {
      let {
        disabled: t,
        optionCount: n,
        label: _,
        desc: p,
        helperText: h,
        required: m,
        withDescriptions: g,
        withIcons: E
      } = e, [b, y] = i.useState(), O = i.useMemo(() => {
        let e = [s.x, o.A, a.d, l.e, c.U];
        return [{
          name: "Option 1",
          value: "option1",
          desc: g ? "This is the first option with some descriptive text" : true,
          leadingIcon: E ? e[0] : true
        }, {
          name: "Option 2",
          value: "option2",
          desc: g ? "This is the second option with different content" : true,
          leadingIcon: E ? e[1] : true
        }, {
          name: "Option 3",
          value: "option3",
          desc: g ? "This is the third option for comparison" : true,
          leadingIcon: E ? e[2] : true
        }, {
          name: "Option 4",
          value: "option4",
          desc: g ? "This is the fourth option" : true,
          leadingIcon: E ? e[3] : true
        }, {
          name: "Option 5",
          value: "option5",
          desc: g ? "This is the fifth option" : true,
          leadingIcon: E ? e[4] : true
        }].slice(0, Math.max(1, Math.min(5, n)))
      }, [n, g, E]), v = i.useCallback(e => {
        y(e)
      }, []), I = i.useCallback(() => {
        O.length > 0 && y(O[0].value)
      }, [O]), T = i.useCallback(() => {
        O.length > 0 && y(O[O.length - 1].value)
      }, [O]), S = i.useCallback(() => {
        y(true)
      }, []);
      return (0, r.jsxs)(u.Kqy, {
        direction: "vertical",
        gap: "md",
        children: [(0, r.jsx)(d.E, {
          value: b,
          label: _,
          description: p,
          helperText: h,
          required: m,
          onChange: v,
          options: O,
          disabled: t
        }), (0, r.jsxs)(u.xvT, {
          variant: "text-sm/normal",
          children: ["Current selection: ", "string" == typeof b && "" !== b ? b : "None"]
        }), (0, r.jsxs)(u.Kqy, {
          direction: "horizontal",
          gap: "sm",
          children: [(0, r.jsx)(f.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Select First",
            onClick: I,
            disabled: t || 0 === O.length
          }), (0, r.jsx)(f.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Select Last",
            onClick: T,
            disabled: t || 0 === O.length
          }), (0, r.jsx)(f.zxk, {
            variant: "primary",
            size: "sm",
            text: "Clear",
            onClick: S,
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
      desc: {
        type: "text",
        label: "Description",
        defaultValue: "This is a description for the radio group"
      },
      helperText: {
        type: "text",
        label: "Helper Text",
        defaultValue: "This is a helper text for the radio group"
      },
      required: {
        type: "boolean",
        label: "Required",
        defaultValue: false
      },
      disabled: {
        type: "boolean",
        label: "Disabled",
        defaultValue: false
      },
      optionCount: {
        type: "select",
        label: "Number of Options",
        defaultValue: 3,
        options: [{
          label: "2 Options",
          value: 2
        }, {
          label: "3 Options",
          value: 3
        }, {
          label: "4 Options",
          value: 4
        }, {
          label: "5 Options",
          value: 5
        }]
      },
      withDescriptions: {
        type: "boolean",
        label: "Show Descriptions",
        defaultValue: true
      },
      withIcons: {
        type: "boolean",
        label: "Show Icons",
        defaultValue: false
      }
    }
  }]
}