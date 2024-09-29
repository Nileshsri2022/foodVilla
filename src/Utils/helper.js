//Custom Hook are just normal js functions
// why?
// 1. to reuse the code
// 2. to make the code more readable
// 3. to make test
// 4. to make code maintainable
// 5. modularity make seperate file to all stuffs

// general convention -custom Hook  (export default) and helper(Named import,constants) 

export function filterData(Search, restaurants) {
    console.log("inside filterData");
    const filterData = restaurants?.filter((r) =>
      r?.info?.name?.toLowerCase().includes(Search)
    );
    // return karne me problem a rhi hai
    console.log(filterData);

    return filterData;
  }
