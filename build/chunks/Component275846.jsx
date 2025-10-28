/** Chunk was on 66548 **/
/** chunk id: 275846, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  i: () => s
}), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk49800 = require("./49800.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk383838 = require("./383838.jsx"),
  Chunk512983 = require("./512983.jsx");
let s = {
  title: "Form Components",
  stories: [{
    id: "formnotice",
    name: "FormNotice",
    component: function(e) {
      let {
        type: l,
        title: t,
        body: n,
        hasButton: r
      } = e, s = r ? (0, a.jsx)(o.Button, {
        text: "Action"
      }) : true;
      return (0, a.jsx)(i.To, {
        type: l,
        title: t,
        body: n,
        button: s
      })
    },
    controls: {
      type: {
        type: "select",
        label: "Type",
        defaultValue: Chunk49800.Z.Types.DANGER,
        options: [{
          label: "Primary",
          value: Chunk49800.Z.Types.PRIMARY
        }, {
          label: "Danger",
          value: Chunk49800.Z.Types.DANGER
        }, {
          label: "Warning",
          value: Chunk49800.Z.Types.WARNING
        }, {
          label: "Success",
          value: Chunk49800.Z.Types.SUCCESS
        }, {
          label: "Brand",
          value: Chunk49800.Z.Types.BRAND
        }, {
          label: "Custom",
          value: Chunk49800.Z.Types.CUSTOM
        }]
      },
      title: {
        type: "text",
        label: "Title",
        defaultValue: "Important Notice"
      },
      body: {
        type: "text",
        label: "Body",
        defaultValue: "This is an important message that you should pay attention to."
      },
      hasButton: {
        type: "boolean",
        label: "Has Button",
        defaultValue: false
      }
    }
  }, {
    id: "formtitle",
    name: "FormTitle",
    component: function(e) {
      let {
        children: l,
        disabled: t,
        required: n,
        errorMessage: o
      } = e, i = (null == o ? true : o.trim()) === "" ? true : o;
      return (0, a.jsx)("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        },
        children: ["h1", "h2", "h3", "h4", "h5", "legend"].map(e => (0, a.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "8px"
          },
          children: [(0, a.jsxs)("code", {
            style: {
              minWidth: "60px",
              fontSize: "12px",
              color: "#666"
            },
            children: [e, ":"]
          }), (0, a.jsx)(r.v, {
            tag: e,
            disabled: t,
            required: n,
            error: i,
            errorId: null != i ? "error-id-".concat(e) : true,
            children: l
          })]
        }, e))
      })
    },
    controls: {
      children: {
        type: "text",
        label: "Title Text",
        defaultValue: "Form Title"
      },
      disabled: {
        type: "boolean",
        label: "Disabled",
        defaultValue: false
      },
      required: {
        type: "boolean",
        label: "Required",
        defaultValue: false
      },
      errorMessage: {
        type: "text",
        label: "Error Message",
        defaultValue: ""
      }
    }
  }]
}