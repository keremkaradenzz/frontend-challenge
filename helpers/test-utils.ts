export const findByTestAttr = (component:any, attr:any) => {
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper
}

// export const checkProps = (component:any, expectedProps) => {
//     const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
//     return propsErr;
// }