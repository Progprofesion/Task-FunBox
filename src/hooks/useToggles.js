const useToggles = (active, toggActive, toggHover) => {

    const activeTogle = (e) => {
        if (active) {
            toggActive(false);
            e.preventDefault();
            toggHover(false)
        } else {
            toggActive(true);
            e.preventDefault();
        }
    }

    const activeHover = () => {
        if (active) {
            toggHover(true)
        } else {
            toggHover(false)
        }
    }

    return { activeTogle, activeHover }
}

export default useToggles