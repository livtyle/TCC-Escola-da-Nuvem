import { Button, Container, Grid, Typography, makeStyles } from "@material-ui/core";
import "./Sobre.css";
import cvLuan from '../../assets/pdf/CVs/CV-Luan.Silva.pdf'
import picLuan from '../../assets/img/perfil/LuanPefil.png'

import cvMorgana from '../../assets/pdf/CVs/Morgana.EdN.pdf'
import picMorgana from '../../assets/img/perfil/MorganaPerfil.png'

import cvLuiz from '../../assets/pdf/CVs/Luiz_Mendes_CV_2023.pdf'
import picLuiz from '../../assets/img/perfil/Luiz.Pefil.png'

import cvLucas from '../../assets/pdf/CVs/Lucas_Magueta.pdf'
import picLucas from '../../assets/img/perfil/Lucas.Perfil.png'

import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { isIOS, isMacOs, isSafari } from 'react-device-detect';
import { LinkedIn } from '@mui/icons-material';
import DownloadIcon from '@mui/icons-material/Download';

const useStyles = makeStyles((theme) => ({
    linkedinIcon: {
        cursor: 'pointer',
    },
    downloadIcon: {
        cursor: 'pointer',
    }
}));


const content = [
    {
        name: 'Luan Silva',
        cvlink: cvLuan,
        cvname: 'Cv-Luan',
        linkedin: 'https://www.linkedin.com/in/luan-silva-6506a61a1/',
        pic: picLuan,
        txt: ' Desenvolvedor Java',
    },

    {
        name: 'Morgana Melo ',
        cvlink: cvMorgana,
        cvname: 'Cv-Morgana',
        pic: picMorgana,
        txt: ' Analista Cloud Jr.',
    },
    {
        name: 'Luiz Mendes',
        cvlink: cvLuiz,
        cvname: 'Cv-Luiz',
        pic: picLuiz,
        txt: 'Analista Suporte TI',
    },
    {
        name: 'Lucas Magueta ',
        cvlink: cvLucas,
        cvname: 'Cv-Lucas',
        pic: picLucas,
        txt: 'Técnico em TI',
    },
    {
        name: ' ',
        cvlink: ' ',
        cvname: '',
        pic: '',
        txt: '',
    }
];

export function Sobre() {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleDownload = (event: React.MouseEvent<HTMLButtonElement>, fileUrl: string, fileName: string) => {

        event.preventDefault();

        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);

        if (!isSafari) {
            try {
                const clickEvent = new MouseEvent('click', {
                    view: window,
                    bubbles: true,
                    cancelable: true,
                });

                link.dispatchEvent(clickEvent);
                toast.success('Download realizado!', {
                    position: 'top-center',
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });
            } catch (error) {
                toast.error('Erro no download: ' + error, {
                    position: 'top-center',
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });
                navigate('*');
            }
            document.body.removeChild(link);
        } else {
            toast.warning(
                'Seu navegador não permite download direto da página, acesse o arquivo para baixá-lo',
                {
                    position: 'top-center',
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                }
            );
        }
    };


    return (
        <>
            <h2 className='h1cv'>Integrantes Do Grupo 4:</h2>
            <main className='cv'>

                {content.map(content => (
                    <div className='cvbox'>
                        <div className='card'>
                            <img src={content.pic} alt={content.name} className='profilepic' />
                            <h2 className='h1but'>{content.name}</h2>
                            <h4 className='h4but'>{content.txt}</h4>
                        <div className="icons">                            
                        <DownloadIcon
                                className={classes.downloadIcon} onClick={(event) => handleDownload(event, content.cvlink, content.cvname)} />
                        <LinkedIn
                                className={classes.linkedinIcon}
                                onClick={() => window.open(content['linkedin'], '_blank')}
                            />
                        </div>    
                        </div>
                    </div>
                ))}

            </main>
        </>
    );
}

export default Sobre;
