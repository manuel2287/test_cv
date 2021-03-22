import axios from 'axios';

export const topFive = ["GrahamCampbell","fabpot","weierophinney","rkh","josh"];

export const getUserInfo = async user => {
    const { data } = await axios.get(`https://api.github.com/users/${user}`);
    return data;
}
