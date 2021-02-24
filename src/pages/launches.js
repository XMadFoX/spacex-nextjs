import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './launches.module.scss';

export default function launches(props) {
	const [page, setPage] = useState(0);
	const [link, setLink] = useState();

	const { data, loading, error, fetchMore } = useQuery(
		gql`
			query GetLaunches($limit: Int, $offset: Int) {
				launchesPast(limit: $limit, offset: $offset) {
					id
					mission_name
					launch_success
					launch_date_local
					launch_site {
						site_name
						site_name_long
					}
					links {
						article_link
						video_link
						mission_patch
						wikipedia
						flickr_images
					}
					rocket {
						rocket_name
					}
				}
			}
		`,
		{ variables: { offset: 0, limit: 20 } }
	);

	return (
		<div className={styles.root}>
			{link && (
				<>
					<span
						style={{
							position: 'fixed',
							zIndex: '500',
							width: '100vw',
							height: '100vh',
							opacity: '0.4',
							top: '0',
							backgroundColor: 'black',
						}}></span>
					<div
						onClickCapture={() => setLink(null)}
						style={{
							position: 'fixed',
							zIndex: '1000',
							width: '100vw',
							height: '100vh',
						}}>
						<Card style={{ margin: '5rem', height: '80%' }}>
							<iframe
								style={{
									display: 'block',
									width: '100%',
									height: '100%',
									border: 'none',
									top: '10%',
									bottom: '10%',
								}}
								src={link}
							/>
						</Card>
					</div>
				</>
			)}
			{error && <p>{error.graphQLErrors[0].message}</p>}
			<Grid container spacing={2} style={{ width: '100%', padding: '5%' }}>
				{data &&
					data.launchesPast.map((l) => {
						return (
							<Grid item xs={12} sm={6}>
								<Card className={styles.card} key={l.id}>
									<Typography variant='h4' color='primary' component='h2'>
										{l.mission_name}
									</Typography>
									<Tooltip title={l.launch_site.site_name_long}>
										<Typography variant='h6' component='h6' noWrap>
											Launched from {l.launch_site.site_name}
										</Typography>
									</Tooltip>
									<Typography variant='h6' component='h6'>
										Launched with {l.rocket.rocket_name}
									</Typography>
									<Typography variant='h6' component='h6'>
										Launched at{' '}
										{new Date(l.launch_date_local).toLocaleDateString(
											navigator.language
										)}
									</Typography>
									<div className={styles.card_buttons_container}>
										<Button
											variant='contained'
											color='secondary'
											onClick={() => setLink(l.links.article_link)}
											disabled={l.links.article_link === null}>
											Read article
										</Button>
										<Button
											variant='contained'
											color='secondary'
											onClick={() => setLink(l.links.video_link)}
											disabled={l.links.video_link === null}>
											Watch video
										</Button>
										<Button
											variant='contained'
											color='secondary'
											onClick={() => setLink(l.links.wikipedia)}
											disabled={l.links.wikipedia === null}>
											Wiki
										</Button>
										<Button
											variant='contained'
											color='secondary'
											onClick={() => setLink(l.links.flickr_images)}
											disabled={l.links.flickr_images === null}>
											View images
										</Button>
									</div>
								</Card>
							</Grid>
						);
					})}
			</Grid>
		</div>
	);
}
