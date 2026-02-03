/** Chunk was on web.js **/
/** chunk id: 969628, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js");
let a = {
    none: true,
    StarIcon: Chunk158954.Gg5,
    FireIcon: Chunk158954.Y3C,
    SparklesIcon: Chunk158954.BZI,
    ClockIcon: Chunk158954.O4
  },
  o = {
    title: "Badge",
    stories: [{
      name: "Badge",
      id: "badge",
      component: function(e) {
        let {
          type: t,
          customText: n,
          variant: o,
          iconName: s
        } = e, l = "custom" === t && null != n && "" !== n ? {
          text: n
        } : t, c = null != s && "" !== s && "none" !== s ? a[s] : true;
        return (0, r.jsx)(i.Exy, {
          type: l,
          variant: o,
          icon: c
        })
      },
      docs: "https://design.discord.tools/components/web/badge",
      controls: {
        type: {
          label: "Type",
          type: "select",
          defaultValue: "new",
          options: [{
            label: "New",
            value: "new"
          }, {
            label: "Beta",
            value: "beta"
          }, {
            label: "Early Access",
            value: "early_access"
          }, {
            label: "Free Trial",
            value: "free_trial"
          }, {
            label: "Custom Text",
            value: "custom"
          }]
        },
        customText: {
          label: "Custom Text",
          type: "text",
          defaultValue: "Custom"
        },
        variant: {
          label: "Variant",
          type: "select",
          defaultValue: "default",
          options: [{
            label: "Default",
            value: "default"
          }, {
            label: "Brand",
            value: "brand"
          }, {
            label: "Expressive",
            value: "expressive"
          }]
        },
        iconName: {
          label: "Icon",
          type: "select",
          defaultValue: "none",
          options: [{
            label: "None",
            value: "none"
          }, {
            label: "Star",
            value: "StarIcon"
          }, {
            label: "Fire",
            value: "FireIcon"
          }, {
            label: "Sparkles",
            value: "SparklesIcon"
          }, {
            label: "Clock",
            value: "ClockIcon"
          }]
        }
      }
    }]
  }