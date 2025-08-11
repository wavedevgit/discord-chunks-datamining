/** Chunk was on 37082 **/
/** chunk id: 749912, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./467055.js"), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk754700 = require("./754700.js"),
  Chunk481060 = require("./481060.js"),
  Chunk70956 = require("./70956.js"),
  Chunk987144 = require("./987144.js");

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = [{
    value: 1,
    label: "Stream Desktop"
  }, {
    value: 0,
    label: "Play Desktop"
  }, {
    value: 3,
    label: "Play Console"
  }, {
    value: 4,
    label: "Play Desktop & Console"
  }, {
    value: 2,
    label: "Watch Video"
  }, {
    value: 5,
    label: "Play Activity"
  }],
  d = function(e) {
    let {
      onSelect: t,
      taskDuration: n = 10,
      taskConfigV2: d
    } = e;
    return <r.Fragment>{<o.xJW>{<o.vwX tag={o.RB0.H5}>{"Task Type(s)"}</o.vwX>}{<o.R94><o.PhF className={i.taskPresetSelect} placeholder={"Select Task Preset"} options={u} renderOptionValue={e => e.map(e => (0, r.jsx)("div", {
              children: e.label
            }, e.value))} renderOptionLabel={e => (0, r.jsx)("div", {
              children: e.label
            })} isSelected={e => e === function(e) {
              let t = s.X.PLAY_ON_PLAYSTATION in e || s.X.PLAY_ON_XBOX in e,
                n = s.X.PLAY_ON_DESKTOP in e || s.X.PLAY_ON_DESKTOP_V2 in e,
                r = s.X.STREAM_ON_DESKTOP in e,
                o = s.X.WATCH_VIDEO in e,
                a = s.X.PLAY_ACTIVITY in e;
              return t && n ? 4 : t ? 3 : n ? 0 : r ? 1 : o ? 2 : a ? 5 : true
            }(d.tasks)} select={e => {
              t(c(l({}, d), {
                tasks: function(e, t) {
                  let n = {};
                  switch (e) {
                    case 1:
                      n[s.X.STREAM_ON_DESKTOP] = {
                        type: s.X.STREAM_ON_DESKTOP,
                        target: t
                      };
                      break;
                    case 0:
                      n[s.X.PLAY_ON_DESKTOP] = {
                        type: s.X.PLAY_ON_DESKTOP,
                        target: t
                      };
                      break;
                    case 3:
                      n[s.X.PLAY_ON_PLAYSTATION] = {
                        type: s.X.PLAY_ON_PLAYSTATION,
                        target: t,
                        externalIds: []
                      }, n[s.X.PLAY_ON_XBOX] = {
                        type: s.X.PLAY_ON_XBOX,
                        target: t,
                        externalIds: []
                      };
                      break;
                    case 4:
                      n[s.X.PLAY_ON_DESKTOP] = {
                        type: s.X.PLAY_ON_DESKTOP,
                        target: t
                      }, n[s.X.PLAY_ON_PLAYSTATION] = {
                        type: s.X.PLAY_ON_PLAYSTATION,
                        target: t,
                        externalIds: []
                      }, n[s.X.PLAY_ON_XBOX] = {
                        type: s.X.PLAY_ON_XBOX,
                        target: t,
                        externalIds: []
                      };
                      break;
                    case 2:
                      n[s.X.WATCH_VIDEO] = {
                        type: s.X.WATCH_VIDEO,
                        target: t,
                        assets: {
                          video: {
                            url: ""
                          }
                        },
                        messages: {
                          videoTitle: ""
                        }
                      };
                      break;
                    case 5:
                      n[s.X.PLAY_ACTIVITY] = {
                        type: s.X.PLAY_ACTIVITY,
                        target: t
                      }
                  }
                  return n
                }(e, n)
              }))
            }} serialize={String} /></o.R94>}</o.xJW>}{<o.xJW>{<o.vwX tag={o.RB0.H5}>{"Task Duration"}</o.vwX>}{<o.R94><o.oil value={String(n / a.Z.Seconds.MINUTE)} onChange={function(e) {
              let n = Number(e);
              if (isNaN(n)) return;
              n *= a.Z.Seconds.MINUTE;
              let r = Object.fromEntries(Object.entries(d.tasks).map(e => {
                let [t, r] = e;
                return [t, c(l({}, r), {
                  target: n
                })]
              }));
              t(c(l({}, d), {
                tasks: r
              }))
            }} /></o.R94>}</o.xJW>}</r.Fragment>
  }