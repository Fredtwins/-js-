export function permissions(arr, name) {

  let newArray = [];

  // 循环判断层级
  arr.map(item => {
    // 把有的权限加进去push
    newArray.push(item);
    // 再判断该层级以下的层级
    if (item.children) {
      // 该层级的再次循环判断
      item.children.map(item2 => {
        //有的话就加进去
        newArray.push(item2);
        // 再判断往下的层级
        if (item2.children) {
          item2.children.map(item3 => {
            newArray.push(item3);
          })
        }
      })
    }
  })
  return newArray;
}