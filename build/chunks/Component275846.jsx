/** Chunk was on web.js **/
/** chunk id: 275846, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => h
}), require("./781311.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk49800 = require("./49800.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk434333 = require("./434333.jsx"),
  Chunk540863 = require("./540863.jsx"),
  Chunk383838 = require("./383838.jsx"),
  Chunk789164 = require("./789164.jsx"),
  Chunk471141 = require("./471141.jsx"),
  Chunk512983 = require("./512983.jsx"),
  Chunk231338 = require("./231338.js");
let p = {
    id: "formnotice",
    name: "FormNotice",
    component: function(e) {
      let {
        type: t,
        title: n,
        body: i,
        hasButton: a
      } = e, s = a ? (0, r.jsx)(o.zxk, {
        text: "Action"
      }) : true;
      return (0, r.jsx)(c.To, {
        type: t,
        title: n,
        body: i,
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
  },
  h = {
    title: "Form Components",
    stories: [p, {
      id: "formitem",
      name: "FormItem",
      component: function(e) {
        let {
          title: t,
          errorMessage: n,
          disabled: i,
          required: a,
          tag: s
        } = e, c = (null == n ? true : n.trim()) === "" ? true : n;
        return (0, r.jsx)(l.x, {
          title: t,
          error: c,
          disabled: i,
          required: a,
          tag: s,
          children: (0, r.jsx)(o.oil, {
            placeholder: "Enter text here..."
          })
        })
      },
      controls: {
        title: {
          type: "text",
          label: "Title",
          defaultValue: "Form Field"
        },
        errorMessage: {
          type: "text",
          label: "Error Message",
          defaultValue: ""
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
        tag: {
          type: "select",
          label: "Title Tag",
          defaultValue: "h5",
          options: [{
            label: "H1",
            value: "h1"
          }, {
            label: "H2",
            value: "h2"
          }, {
            label: "H3",
            value: "h3"
          }, {
            label: "H4",
            value: "h4"
          }, {
            label: "H5",
            value: "h5"
          }, {
            label: "Label",
            value: "label"
          }, {
            label: "Legend",
            value: "legend"
          }]
        }
      }
    }, {
      id: "formtitle",
      name: "FormTitle",
      component: function(e) {
        let {
          children: t,
          disabled: n,
          required: i,
          errorMessage: a
        } = e, o = (null == a ? true : a.trim()) === "" ? true : a, s = ["h1", "h2", "h3", "h4", "h5", "legend"];
        return (0, r.jsx)("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          },
          children: s.map(e => (0, r.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "8px"
            },
            children: [(0, r.jsxs)("code", {
              style: {
                minWidth: "60px",
                fontSize: "12px",
                color: "#666"
              },
              children: [e, ":"]
            }), (0, r.jsx)(f.v, {
              tag: e,
              disabled: n,
              required: i,
              error: o,
              errorId: null != o ? "error-id-".concat(e) : true,
              children: t
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
    }, {
      id: "formswitch",
      name: "FormSwitch",
      component: function(e) {
        let {
          children: t,
          disabled: n,
          hideBorder: a,
          note: o,
          disabledText: s,
          tooltipNote: l
        } = e, [c, u] = i.useState(false), f = e => {
          u(e)
        };
        return (0, r.jsx)(d.j, {
          value: c,
          disabled: n,
          hideBorder: a,
          onChange: f,
          note: (null == o ? true : o.trim()) === "" ? true : o,
          disabledText: "" === s.trim() ? true : s,
          tooltipNote: "" === l.trim() ? true : l,
          children: t
        })
      },
      controls: {
        children: {
          type: "text",
          label: "Label Text",
          defaultValue: "Enable this feature"
        },
        disabled: {
          type: "boolean",
          label: "Disabled",
          defaultValue: false
        },
        hideBorder: {
          type: "boolean",
          label: "Hide Border",
          defaultValue: false
        },
        note: {
          type: "text",
          label: "Note",
          defaultValue: ""
        },
        disabledText: {
          type: "text",
          label: "Disabled Text",
          defaultValue: ""
        },
        tooltipNote: {
          type: "text",
          label: "Tooltip Note",
          defaultValue: ""
        }
      }
    }, {
      id: "formsection",
      name: "FormSection",
      component: function(e) {
        let {
          title: t,
          disabled: n,
          tag: i
        } = e;
        return (0, r.jsxs)(u.h, {
          title: t,
          disabled: n,
          tag: i,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-md/normal",
            children: "This is content within the form section."
          }), (0, r.jsx)(o.oil, {
            placeholder: "Enter text here..."
          })]
        })
      },
      controls: {
        title: {
          type: "text",
          label: "Title",
          defaultValue: "Section Title"
        },
        disabled: {
          type: "boolean",
          label: "Disabled",
          defaultValue: false
        },
        tag: {
          type: "select",
          label: "Title Tag",
          defaultValue: "h5",
          options: [{
            label: "H1",
            value: "h1"
          }, {
            label: "H2",
            value: "h2"
          }, {
            label: "H3",
            value: "h3"
          }, {
            label: "H5",
            value: "h5"
          }]
        }
      }
    }, {
      id: "formerrorblock",
      name: "FormErrorBlock",
      component: function(e) {
        let {
          children: t,
          backgroundColor: n,
          hasDismiss: i,
          iconType: a
        } = e, l = "check" === a ? o.owK : o.Mgn;
        return (0, r.jsx)(s.k, {
          backgroundColor: n,
          onDismiss: i ? _.dG : true,
          icon: l,
          children: t
        })
      },
      controls: {
        children: {
          type: "text",
          label: "Error Message",
          defaultValue: "This is an error message that needs attention."
        },
        backgroundColor: {
          type: "select",
          label: "Background Color",
          defaultValue: Chunk434333.m.RED,
          options: [{
            label: "Red",
            value: Chunk434333.m.RED
          }, {
            label: "Background Tertiary",
            value: Chunk434333.m.BACKGROUND_TERTIARY
          }, {
            label: "Background Accent",
            value: Chunk434333.m.BACKGROUND_ACCENT
          }]
        },
        hasDismiss: {
          type: "boolean",
          label: "Has Dismiss Button",
          defaultValue: false
        },
        iconType: {
          type: "select",
          label: "Icon Type",
          defaultValue: "error",
          options: [{
            label: "Error",
            value: "error"
          }, {
            label: "Check",
            value: "check"
          }]
        }
      }
    }]
  }