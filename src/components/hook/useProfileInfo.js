import { useEffect, useState } from 'react';

const useProfileInfo = (email) => {
    const [refetch, setRefetch] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        fetch(`https://evening-cove-42759.herokuapp.com/users?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data)
            })
    }, [email, refetch])
    return [userInfo, refetch, setRefetch, setUserInfo];
};

export default useProfileInfo;

