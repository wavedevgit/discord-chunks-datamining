/** Chunk was on 52272 **/
n.d(t, {
  m: () => l
});
var r = n(806966),
  i = n(585483),
  o = n(981631),
  a = n(957825);

function l(e) {
  let {
    stickerPack: t,
    stickerPickerCategories: n
  } = e;
  i.S.dispatchToLastSubscribed(o.CkL.OPEN_EXPRESSION_PICKER, {
    activeView: a.X1.STICKER
  });
  let l = n.findIndex(e => e.id === t.id); - 1 !== l && r.ZN.setActiveCategoryIndex(l)
}